package com.ajsb.gegas;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.ajsb.gegas.database.Database;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.snackbar.Snackbar;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class LoginActivity extends AppCompatActivity
{
    private final int ID_LOGIN = 100 ;
    public static final int REGISTRO_OK = 1 ;
    public static final int REGISTRO_ERROR = 0 ;

    private Button btnLogin ;
    private Button btnRegistro ;

    private EditText email ;
    private EditText password ;

    /**
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState) ;

        // Indicamos el layout que se va a utilizar para la actividad
        setContentView(R.layout.activity_login) ;

        //
        email       = findViewById(R.id.emailInput) ;
        password    = findViewById(R.id.passwordInput) ;
        btnLogin    = findViewById(R.id.bntLogin) ;
        btnRegistro = findViewById(R.id.bntRegistro) ;

        // Pulsamos en el botón de LOGIN
        btnLogin.setOnClickListener(view -> doLogin(view)) ;

        // Pulsamos el botón de REGISTRO
        btnRegistro.setOnClickListener(view ->
        {
            Intent i = new Intent(this, RegisterActivity.class) ;

            // Iniciamos la actividad de registro y quedamos a la espera de un
            // resultado por parte de ésta.
            startActivityForResult(i, ID_LOGIN); ;
        });
    }

    /**
     * Capturamos el resultado de la actividad de REGISTRO
     * @param requestCode
     * @param resultCode
     * @param data
     */
    @Override
    protected void onActivityResult(int requestCode,
                                    int resultCode, @Nullable Intent data)
    {
        // Si no soy yo, llamo al constructor del padre y finalizo
        if (requestCode != ID_LOGIN)
        {
            super.onActivityResult(requestCode, resultCode, data);
            return ;
        }

        // Si soy yo, compruebo el resultado de la operación de registro
        if (resultCode == REGISTRO_OK)
            Snackbar.make(btnRegistro, R.string.msg_registro_ok, Snackbar.LENGTH_LONG).show() ;
        else
            Snackbar.make(btnRegistro, R.string.msg_registro_error, Snackbar.LENGTH_LONG).show() ;
    }

    /**
     * @param vista
     */
    private void doLogin(View vista)
    {
        String ema = email.getText().toString().trim() ;
        String pwd = password.getText().toString().trim() ;

        //
        if ((ema.isEmpty()) || (pwd.isEmpty()))
        {
            // Uno o ambos campos están vacíos.
            Snackbar.make(vista,R.string.msg_vacio,Snackbar.LENGTH_LONG)
                    .show() ;
            return ;
        }

        // Los campos tienen información
        // Instanciamos el objeto FirebaseAuth
        FirebaseAuth fbauth ;
        fbauth = FirebaseAuth.getInstance() ;

        // Intentamos hacer login

        fbauth.signInWithEmailAndPassword(ema, pwd)
              .addOnCompleteListener(task ->
              {
                  if (!task.isSuccessful())
                  {
                      // Login incorrecto.
                      Snackbar.make(vista,R.string.msg_login,Snackbar.LENGTH_LONG)
                              .show() ;
                      return ;
                  }

                  // Login correcto
                  // Acceder a la pantalla principal de la aplicación
                  Intent i = new Intent(this, MainActivity.class) ;
                  startActivity(i) ;
              })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.e("error", e.getMessage());
                    }
                })


        ;
    }
}