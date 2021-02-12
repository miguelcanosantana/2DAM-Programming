package com.ajsb.gegas.recycler;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.ajsb.gegas.R;
import com.ajsb.gegas.database.entidades.Movimiento;

import java.util.Arrays;
import java.util.List;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

public class MovimientoAdapter extends RecyclerView.Adapter<MovimientoHolder>
{

    private Context contexto ;
    private List<Movimiento> datos ;
    private onMovimientoClickListener listener ;

    /**
     * @param contexto
     * @param datos
     */
    public MovimientoAdapter(Context contexto, List<Movimiento> datos,
                             onMovimientoClickListener listener)
    {
        this.contexto = contexto;
        this.datos    = datos;
        this.listener = listener ;
    }

    /**
     * @param datos
     */
    public void setDatos(List<Movimiento> datos)
    {
        this.datos.clear() ;
        this.datos.addAll(datos) ;
        notifyDataSetChanged() ;
    }

    /**
     * @param movimiento
     */
    public void insertMovimiento(Movimiento movimiento)
    {
        this.datos.add(movimiento) ;
        notifyItemInserted(this.datos.size() - 1) ;
    }

    /**
     * @param movimiento
     */
    public void removeMovimiento(Movimiento movimiento)
    {
        int position = this.datos.indexOf(movimiento) ;
        this.datos.remove(position) ;
        notifyItemRemoved(position) ;
    }

    /**
     * @param parent
     * @param viewType
     * @return
     */
    @NonNull
    @Override
    public MovimientoHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType)
    {

        View layout ;
        layout = LayoutInflater.from(contexto)
                              .inflate(R.layout.list_item, parent, false) ;
        //
        return new MovimientoHolder(layout) ;
    }

    /**
     * @param holder
     * @param position
     */
    @Override
    public void onBindViewHolder(@NonNull MovimientoHolder holder, int position)
    {
        holder.bind(datos.get(position), contexto, listener) ;
    }

    /**
     * Devuelve el tamaño de la lista de datos
     * @return
     */
    @Override
    public int getItemCount()
    {
        return datos.size() ;
    }
}
