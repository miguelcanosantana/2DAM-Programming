package com.ajsb.gegas;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.ajsb.gegas.database.Database;
import com.ajsb.gegas.database.entidades.Usuario;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.snackbar.Snackbar;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class RegisterActivity extends AppCompatActivity
{
    private EditText email ;
    private EditText password ;
    private EditText nombre ;
    private EditText apellidos ;

    private Button btnGuardar ;

    /**
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        // Instanciamos las vistas
        email      = findViewById(R.id.emailInput) ;
        password   = findViewById(R.id.passwordInput) ;
        nombre     = findViewById(R.id.nombreInput) ;
        apellidos  = findViewById(R.id.apellidosInput) ;
        btnGuardar = findViewById(R.id.bntGuardar) ;

        //
        btnGuardar.setOnClickListener(view -> doRegister(view)) ;
    }

    /**
     * @param vista
     */
    private void doRegister(View vista)
    {
        // Guardamos las cadenas
        String ema = textTrimmed(email) ;
        String pas = textTrimmed(password) ;
        String nom = textTrimmed(nombre) ;
        String ape = textTrimmed(apellidos) ;

        //
        if (checkFields(ema, pas, nom, ape))
        {
            // Mostramos el mensaje
            Snackbar.make(vista, R.string.msg_obligatorio,Snackbar.LENGTH_LONG).show() ;
            return;
        }

        // Se han introducido los datos
        // Obtenemos una instancia de FirebaseAuth
        FirebaseAuth fbauth = FirebaseAuth.getInstance() ;

        // Registramos
        fbauth.createUserWithEmailAndPassword(ema, pas)
              .addOnCompleteListener(task ->
              {
                    if (!task.isSuccessful())
                        setResult(LoginActivity.REGISTRO_ERROR) ;
                    else
                    {
                        // Creamos el usuario
                        Usuario usuario = new Usuario() ;
                        usuario.setUid(fbauth.getUid());
                        usuario.setNombre(nom) ;
                        usuario.setApellidos(ape) ;

                        // Guardamos la información del usuario en la base de datos
                        // local, utilizando ROOM DATABASE.
                        Database db = Database.getInstancia(this) ;
                        db.getDAO()
                          .insertarUsuario(usuario) ;

                        // Regresamos a la actividad de login
                        setResult(LoginActivity.REGISTRO_OK) ;
                    }

                  finish() ;
                  return ;
              }) ;
    }

    /**
     * @param ema
     * @param pas
     * @param nom
     * @param ape
     * @return
     */
    private boolean checkFields(String ema, String pas, String nom, String ape)
    {
        return ((ema.isEmpty()) || (pas.isEmpty()) || (nom.isEmpty()) || (ape.isEmpty())) ;
    }


    /**
     * @param vista
     * @return
     */
    private String textTrimmed(EditText vista)
    {
        return vista.getText().toString().trim() ;
    }


}