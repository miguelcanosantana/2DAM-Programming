package com.ajsb.gegas.database;

import android.content.Context;

import androidx.room.Room;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

public class Database
{
    private static Database instancia = null  ;
    private gegasDatabase db ;

    private Database(Context contexto)
    {
        db = Room.databaseBuilder(contexto, gegasDatabase.class, "gegas")
                 .allowMainThreadQueries()
                 .build() ;
    }

    /**
     * Se implementa con un patrón singleton.
     * @return
     */
    public static Database getInstancia(Context contexto)
    {
        if (instancia == null) instancia = new Database(contexto) ;
        return instancia ;
    }

    /**
     * @return
     */
    public gegasDAO getDAO()
    {
        return db.getGegasDAO() ;
    }
}
