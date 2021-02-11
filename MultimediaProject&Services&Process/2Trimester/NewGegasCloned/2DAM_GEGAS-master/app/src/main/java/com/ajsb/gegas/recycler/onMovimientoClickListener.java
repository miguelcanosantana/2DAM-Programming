package com.ajsb.gegas.recycler;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import com.ajsb.gegas.database.entidades.Movimiento;

public interface onMovimientoClickListener
{
    public final int EDITAR_MOVIMIENTO = 200 ;
    public final int BORRAR_MOVIMIENTO = 201 ;

    public void onClick(Movimiento movimiento, int cop) ;
}
