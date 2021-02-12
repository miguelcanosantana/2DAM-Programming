package com.ajsb.gegas.database;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.room.Database;
import androidx.room.RoomDatabase;

import com.ajsb.gegas.database.entidades.Movimiento;
import com.ajsb.gegas.database.entidades.Usuario;

@Database(entities = { Usuario.class, Movimiento.class }, version = 1)
public abstract class gegasDatabase extends RoomDatabase
{
    public abstract gegasDAO getGegasDAO() ;
}
