package servlets;
import crud.FileCrud;
import crud.Lab2CrudInterface;
import fileIO.FileIO;

public class ServletConfig implements ServletConfigInterface {
    Lab2CrudInterface l2ci;

    public Lab2CrudInterface getL2ci() {
        return l2ci;
    }

    public void setL2ci(Lab2CrudInterface l2ci) {
        this.l2ci = l2ci;
    }
    public ServletConfig(){
        this.l2ci = new FileCrud();
    }

    @Override
    public Lab2CrudInterface getCrud(){
        return l2ci;
    }
}
