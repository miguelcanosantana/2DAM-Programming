package com.ajsb.gegas.database.entidades;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "usuario")
public class Usuario
{
    @PrimaryKey(autoGenerate = true)
    private int idUsu ;

    @ColumnInfo(name = "uid")
    private String uid ;

    @ColumnInfo(name = "nombre")
    private String nombre ;

    @ColumnInfo(name = "apellidos")
    private String apellidos ;

    @ColumnInfo(name = "foto")
    private String foto ;

    /**
     * @param idUsu
     */
    public void setIdUsu(int idUsu)
    {
        this.idUsu = idUsu ;
    }

    /**
     * @return
     */
    public int getIdUsu()
    {
        return idUsu ;
    }

    /**
     * @return
     */
    public String getUid() {
        return uid;
    }

    /**
     * @param uid
     */
    public void setUid(String uid) {
        this.uid = uid;
    }

    /**
     * @return
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return
     */
    public String getApellidos() {
        return apellidos;
    }

    /**
     * @param apellidos
     */
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    /**
     * @return
     */
    public String getFoto() {
        return foto;
    }

    /**
     * @param foto
     */
    public void setFoto(String foto) {
        this.foto = foto;
    }

    /**
     * @return
     */
    @Override
    public String toString()
    {
        return nombre + " " + apellidos ;
    }
}
