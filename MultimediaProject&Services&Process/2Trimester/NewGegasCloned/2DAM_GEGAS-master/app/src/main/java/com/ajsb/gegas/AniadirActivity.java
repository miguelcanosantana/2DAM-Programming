package com.ajsb.gegas;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.ajsb.gegas.database.Database;
import com.ajsb.gegas.database.entidades.Movimiento;
import com.google.android.material.snackbar.Snackbar;
import com.google.firebase.auth.FirebaseAuth;

public class AniadirActivity extends AppCompatActivity
{
    private EditText fecha ;
    private EditText cantidad ;
    private EditText concepto ;

    private Button btnGuardar ;
    private Button btnCancelar ;

    /**
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_aniadir);

        fecha       = findViewById(R.id.fechaInput) ;
        cantidad    = findViewById(R.id.cantidadInput) ;
        concepto    = findViewById(R.id.conceptoInput) ;
        btnGuardar  = findViewById(R.id.btnGuardar) ;
        btnCancelar = findViewById(R.id.btnCancelar) ;

        // Si pulsamos en guardar, llamamos a la función doSave.
        btnGuardar.setOnClickListener(view -> doSave(view));

        // Si pulsamos en cancelar, regresamos a la actividad anterior
        btnCancelar.setOnClickListener(view ->
        {
            setResult(RESULT_CANCELED) ;
            finish() ;
            return ;
        });
    }

    /**
     * @param view
     */
    private void doSave(View view)
    {
        // recuperamos los datos del movimiento
        String fec  = fecha.getText().toString().trim() ;
        String con  = concepto.getText().toString().trim() ;
        Integer can = Integer.parseInt(cantidad.getText().toString().trim()) ;

        // comprobamos si alguno es vacío y mostramos error en ese caso
        // if (...)
        //{
        //    Snackbar.make(view, R.string.msg_obligatorio, Snackbar.LENGTH_LONG).show() ;
        //    return ;
        //}

        // si los campos tienen información, guardamos
        // creamos el movimiento
        Movimiento movimiento = new Movimiento() ;
        movimiento.setFecha(fec) ;
        movimiento.setCantidad(can) ;
        movimiento.setConcepto(con) ;
        movimiento.setUid(FirebaseAuth.getInstance().getUid());

        // guardamos en la base de datos local
        Database db = Database.getInstancia(this) ;
        db.getDAO()
          .insertarMovimiento(movimiento) ;

        // Guardamos la información a devolver
        Bundle bundle = new Bundle() ;
        bundle.putSerializable("movimiento", movimiento) ;

        Intent intent = new Intent() ;
        intent.putExtras(bundle) ;

        // regresamos a la actividad anterior
        setResult(RESULT_OK, intent) ;
        finish() ;
        return ;
    }
}