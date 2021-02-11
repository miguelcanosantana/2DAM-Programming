package com.ajsb.gegas;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.ajsb.gegas.database.Database;
import com.ajsb.gegas.database.entidades.Movimiento;
import com.ajsb.gegas.database.entidades.Usuario;
import com.ajsb.gegas.recycler.MovimientoAdapter;
import com.ajsb.gegas.recycler.onMovimientoClickListener;
import com.google.android.gms.common.util.ArrayUtils;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.internal.InternalTokenProvider;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.squareup.picasso.Picasso;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity
{
    private final int MAIN_ACTIVITY_CODE    = 999 ;
    private final int GALLERY_ACTIVITY_CODE = 998 ;
    private final int GALLERY_PERMISSION    = 800 ;

    private FirebaseAuth fbauth ;
    private Usuario usuario ;
    private Database db ;
    private FirebaseStorage storage ;

    // Vistas
    private ImageView foto ;
    private TextView nombre ;
    private RecyclerView rv ;
    private Button btnAniadir ;

    // Lista de movimientos del usuario
    private List<Movimiento> datos ;
    private MovimientoAdapter adapter ;

    /**
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //
        foto       = findViewById(R.id.userPict) ;
        nombre     = findViewById(R.id.userName) ;
        btnAniadir = findViewById(R.id.btnAdd) ;
        rv         = findViewById(R.id.recyclerView) ;

        // Instanciamos el sistema de autenticación
        fbauth = FirebaseAuth.getInstance() ;

        // Obtengo una instancia de la base de datos
        db = Database.getInstancia(this) ;

        // Obtenemos una instancia del servicio
        storage = FirebaseStorage.getInstance() ;

        // Busco el usuario
        usuario = db.getDAO().buscarUsuarioUID(fbauth.getUid()) ;

        // Si el usuario no se encuentra hacemos logout
        // ENVIAMOS MENSAJE HACIA LA ACTIVIDA DE LOGIN INDICANDO QUE SE HA
        // PRODUCIDO UN FALLO ---- PENDIENTE.
        if (usuario==null) { logout(); return; }

        // Mostramos información del usuario
        //showUserInfo() ;

        // inicializamos la lista de movimientos
        datos = new ArrayList<>() ;

        // obtenemos los movimientos desde la base de datos
        datos = db.getDAO().listadoMovimientos(usuario.getUid()) ;

        // Cuando hagamos clic en Añadir Movimiento abrimos una nueva actividad
        // donde solicitaremos información sobre el movimiento.
        btnAniadir.setOnClickListener(view ->
        {
            Intent i = new Intent(this, AniadirActivity.class) ;
            startActivityForResult(i, MAIN_ACTIVITY_CODE) ;
        });

        // Cuando hagamos clic en la foto de perfil, abrimos la galería.
        foto.setOnClickListener(view ->
        {
            if (checkPermission()) loadImageFromGallery() ;
        }) ;

        // creamos el adaptador para el RecyclerView
        adapter = new MovimientoAdapter(this, datos, (movimiento, cop) -> doAction(movimiento, cop)) ;
        rv.setLayoutManager(new LinearLayoutManager(this)) ;
        rv.setAdapter(adapter) ;
    }

    /**
     * @return
     */
    private boolean checkPermission()
    {
        int ok = ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE) ;
        if (ok == PackageManager.PERMISSION_GRANTED) return true ;
        else
        {
            // Si no tenemos permiso, tendremos que pedirlo
            ActivityCompat.requestPermissions(this,
                                                new String[] { Manifest.permission.READ_EXTERNAL_STORAGE },
                                                GALLERY_PERMISSION) ;
            return false ;
        }
    }

    /**
     */
    private void loadImageFromGallery()
    {
        // Definimos el array con los tipos MIME
        String[] mime = new String[] { "image/jpeg", "image/jpg" } ;

        Intent intent = new Intent(Intent.ACTION_PICK) ;
        intent.putExtra(Intent.EXTRA_MIME_TYPES, mime) ;
        intent.setType("image/*") ;

        startActivityForResult(intent, GALLERY_ACTIVITY_CODE) ;
    }

    /**
     */
    private void showUserInfo()
    {
        // Mostramos el nombre del usuario
        nombre.setText(usuario.toString()) ;

        // Cargar la imagen desde Firebase Cloud Storage
        // Obtener una referencia al archivo
        storage.getReference(usuario.getFoto())
               .getDownloadUrl()
               .addOnSuccessListener(uri ->
               {
                   // Mostramos la foto de perfil en el ImageView
                   Picasso.get().load(uri).into(foto) ;
               }) ;
    }

    /**
     * @param mov
     * @param cop
     */
    private void doAction(Movimiento mov, int cop)
    {
        switch(cop)
        {
            case onMovimientoClickListener.EDITAR_MOVIMIENTO:
                // Llamo a la actividad EDITAR y le paso el movimiento
                break ;
            case onMovimientoClickListener.BORRAR_MOVIMIENTO:
                // Borramos de la base de datos
                db.getDAO().borrarMovimiento(mov) ;

                // Borro el movimiento del adaptador
                adapter.removeMovimiento(mov) ;

                break ;

        }
    }

    /**
     */
    private void logout()
    {
        fbauth.signOut() ;
        finish() ;
        return ;
    }

    /**
     */
    @Override
    public void onBackPressed()
    {
        logout();
    }

    /**
     * @param requestCode
     * @param resultCode
     * @param data
     */
    @Override
    protected void onActivityResult(int requestCode,
                                    int resultCode, @Nullable Intent data)
    {
        switch(requestCode)
        {
            //
            case MAIN_ACTIVITY_CODE:
                if (resultCode==RESULT_OK)
                {
                    //adapter.setDatos(db.getDAO().listadoMovimientos(usuario.getUid()));
                    Movimiento mov  ;
                    mov = (Movimiento) data.getExtras().getSerializable("movimiento") ;
                    this.adapter.insertMovimiento(mov) ;
                }
                break ;

            //
            case GALLERY_ACTIVITY_CODE:
                if (resultCode==RESULT_OK)
                {
                    // Obtenemos, desde el paquete de datos que se nos ha devuleto,
                    // la imagen elegida en la galería.
                    Cursor cursor = getContentResolver()
                                    .query(data.getData(),
                                            new String[] { MediaStore.Images.Media.DATA },
                                            null, null, null) ;

                    // Aunque no es necesario, la documentación nos recomienda hacer
                    // que el cursor apunte al primer elemento de la colección.
                    cursor.moveToFirst() ;

                    // Creamos, en nuestra app, un archivo a partir de la secuencia de
                    // bytes de la imagen.
                    File file = new File(cursor.getString(0)) ;

                    // Cerramos el cursor.
                    cursor.close();

                    // 1. Mostramos la foto
                    Picasso.get().load(file).into(foto) ;

                    // 2. Subimos la foto al Storage
                    StorageReference ref ;
                    ref = storage.getReference()
                                 .child(usuario.getUid() + ".jpg") ;

                    ref.putFile(Uri.fromFile(file)) ;

                    // 3. Actualizamos la foto en el objeto USUARIO
                    usuario.setFoto(usuario.getUid() + ".jpg") ;

                    // 4. Actualizamos la base de datos local
                    db.getDAO()
                      .actualizarUsuario(usuario) ;

                }
                break ;

            default:
                super.onActivityResult(requestCode, resultCode, data) ;
        }
    }

    /**
     * @param requestCode
     * @param permissions
     * @param grantResults
     */
    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           @NonNull String[] permissions,
                                           @NonNull int[] grantResults)
    {
        if (requestCode == GALLERY_PERMISSION)
            if ((grantResults.length > 0) &&
                (grantResults[0] == PackageManager.PERMISSION_GRANTED)) loadImageFromGallery() ;
        else
            super.onRequestPermissionsResult(requestCode, permissions, grantResults);


    }
}