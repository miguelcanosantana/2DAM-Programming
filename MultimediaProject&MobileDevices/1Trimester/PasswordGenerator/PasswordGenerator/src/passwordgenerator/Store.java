package passwordgenerator;
import java.util.ArrayList;

//Store Class (For Storing Passwords)
public class Store {
  
  //Atributes
  private ArrayList pswdStore = new ArrayList(1);

  //Add a Password to the Store
  public void addToPswdStore(Password pswd) {
    ArrayList store = this.pswdStore;
    store.add(pswd);
  }

  //ToString to Print
  @Override
  public String toString() {
    ArrayList store = this.pswdStore;
    
    //For printing ArrayList (until reaches max size) without [] must use manual printing
    for (int i = 0; i < store.size(); i++) {
      System.out.println(store.get(i));
    }
    
    //For creating bottom decoration in the return print
  return "---------------------------------";
  }
  
  
  
  
  
}
