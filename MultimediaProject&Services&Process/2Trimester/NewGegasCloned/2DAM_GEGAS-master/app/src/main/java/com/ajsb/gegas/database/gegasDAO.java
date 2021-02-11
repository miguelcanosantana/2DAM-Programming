package com.ajsb.gegas.database;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import com.ajsb.gegas.database.entidades.Movimiento;
import com.ajsb.gegas.database.entidades.Usuario;

import java.util.List;

@Dao
public interface gegasDAO
{
    // Métodos de USUARIO
    @Query("SELECT * FROM usuario WHERE uid = :uid")
    public Usuario buscarUsuarioUID(String uid) ;

    @Insert
    public void insertarUsuario(Usuario usuario) ;

    @Update
    public void actualizarUsuario(Usuario usuario) ;

    // Métodos de MOVIMIENTO
    @Query("SELECT * FROM movimiento WHERE uid = :uid")
    public List<Movimiento> listadoMovimientos(String uid) ;

    @Insert
    public void insertarMovimiento(Movimiento movimiento) ;

    @Delete
    public void borrarMovimiento(Movimiento movimiento) ;

}
