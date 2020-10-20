package com.miguel.factorial;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

  private EditText input;
  private Button boton;
  private TextView resultado;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    //Obtenemos una referencia a los elementos de la interfaz
    input = findViewById(R.id.input);
    boton = findViewById(R.id.boton);
    resultado = findViewById(R.id.resultado);

    //Se ejecuta la función
    boton.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Log.i("ETIQUETADEBUG1","Has pulsado el botón");

        resultado.setText(R.string.botonDespuesPush);
        String textBoxNumber = input.getText().toString();
        int convertedNumber = Integer.parseInt(textBoxNumber);
        String finalNumber = makeFactorial(convertedNumber).toString();
        resultado.setText(finalNumber);
      }
    });


  }


  static Integer makeFactorial(Integer input) {

    ArrayList<Integer> numbers = new ArrayList<Integer>();
    int resultNumber = 1;

    //Se van añadiendo a un array los números a multiplicar
    for (int i = 1; i <= input; i++) {
      numbers.add(i);
    }

    //Se multiplican los números del array entre sí
    for (int i = 0; i < numbers.size(); i++) {
      resultNumber *= numbers.get(i);
    }

    Log.i("ETIQUETADEBUG3", String.valueOf(resultNumber));

    return resultNumber;
  }

}