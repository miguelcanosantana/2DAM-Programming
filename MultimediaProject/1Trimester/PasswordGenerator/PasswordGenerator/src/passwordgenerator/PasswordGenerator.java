package passwordgenerator;
import java.util.Scanner;

public class PasswordGenerator {

  //Main Class
  public static void main(String[] args) {
    
    //Main Program
    Scanner scan = new Scanner(System.in);
    Store store = new Store();
    int numericInput;
    int numberOfPass;
    int lengthOfPass;
    int pswdCounter = 1;
    
    System.out.println("--------------------------------");
    System.out.println("-----P__A__S__S__W__O__R__D-----");
    System.out.println("--------------------------maker-");
    System.out.println();
    
    
    //Number of passwords
    do {
      System.out.print("How many passwords do you want? (Minimum 1): ");
      numericInput = scan.nextInt();
    } while (numericInput < 1);
    numberOfPass = numericInput;
    
    
    //Creates passwords, sets length and adds them to the Store
    for (int i = 0; i < numberOfPass; i++) {
      Password pswd = new Password();
      
      //Length of passwords
      do {
      System.out.print("Which length do you want for the password " + pswdCounter +
        " (Minimum 5 /For Default press 0): ");
      numericInput = scan.nextInt();

      } while ((numericInput < 5) && (numericInput != 0));
      
      //Adds + to Password Counter
      pswdCounter++;
      
      if (numericInput != 0) {
        lengthOfPass = numericInput;
        pswd.setLong(lengthOfPass);
      }
      //Else in the Password constructor the number 8 is the default one 
      
      pswd.generatePswd();
      store.addToPswdStore(pswd);
    }
    
    //Passwords Printing
    System.out.println("\n");
    System.out.println("-_-_PASSWORDS_-_-");
    
    //Print password Store
    System.out.println(store);
            
    
  }

    
}
  

