package com.ajsb.gegas.recycler;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.ajsb.gegas.R;
import com.ajsb.gegas.database.entidades.Movimiento;

public class MovimientoHolder extends RecyclerView.ViewHolder
{
    private TextView cantidad ;
    private TextView concepto ;
    private Button btnEditar ;
    private Button btnBorrar ;

    /**
     * @param layout
     */
    public MovimientoHolder(@NonNull View layout)
    {
        super(layout) ;

        cantidad  = layout.findViewById(R.id.itemDinero) ;
        concepto  = layout.findViewById(R.id.itemConcepto) ;
        btnEditar = layout.findViewById(R.id.itemEditar) ;
        btnBorrar = layout.findViewById(R.id.itemBorrar) ;

        /** Hacemos clic sobre el MOVIMIENTO **/
        layout.setOnClickListener(v -> {

            Log.i("ADAPTADOR", "Has pulsado en el MOVIMIENTO") ;
        });
    }

    /**
     * @param item
     */
    public void bind(Movimiento item, Context contexto,
                     onMovimientoClickListener listener)
    {
        // Mostramos el concepto
        //concepto.setText(item.getFecha() + "\n" + item.getConcepto()) ;
        concepto.setText(contexto.getString(R.string.item_concepto,
                                            item.getFecha(), item.getConcepto())) ;

        // Mostramos la cantidad
        cantidad.setText(String.valueOf(item.getCantidad())) ;

        // Si la cantidad es negativa, mostramos con otro color
        // IMPORTANTE: utilizamos getColor a partir de la API 23
        if (item.getCantidad() < 0)
            cantidad.setTextColor(contexto.getColor(R.color.valor_negativo));

        /** Hacemos clic sobre un botón **/
        btnEditar.setOnClickListener(v -> {
            listener.onClick(item, onMovimientoClickListener.EDITAR_MOVIMIENTO) ;
            Log.i("ADAPTADOR", "** Has pulsado en el botón EDITAR") ;
        });
        btnBorrar.setOnClickListener(v -> {
            listener.onClick(item, onMovimientoClickListener.BORRAR_MOVIMIENTO) ;
            Log.i("ADAPTADOR", "** Has pulsado en el botón BORRAR") ;
        });

    }
}
