package com.ajsb.gegas.database.entidades;

/**
 * Antonio José Sánchez Bujaldón
 * Programación Multimedia y de Dispositivos Móviles
 * curso 2020/21
 */

import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import java.io.Serializable;

@Entity(tableName = "movimiento")
public class Movimiento implements Serializable
{
    @PrimaryKey(autoGenerate = true)
    private int idMov ;

    @ColumnInfo(name = "uid")
    private String uid ;

    @ColumnInfo(name = "cantidad")
    private int cantidad ;

    @ColumnInfo(name = "fecha")
    private String fecha ;

    @ColumnInfo(name = "concepto")
    private String concepto ;

    /**
     * @return
     */
    public int getIdMov() {
        return idMov;
    }

    /**
     * @param idMov
     */
    public void setIdMov(int idMov) {
        this.idMov = idMov;
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
    public int getCantidad() {
        return cantidad;
    }

    /**
     * @param cantidad
     */
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    /**
     * @return
     */
    public String getFecha() {
        return fecha;
    }

    /**
     * @param fecha
     */
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    /**
     * @return
     */
    public String getConcepto() {
        return concepto;
    }

    /**
     * @param concepto
     */
    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    /**
     * @return
     */
    @Override
    public String toString() {
        return "concepto = '" + concepto + "'" ;
    }
}
