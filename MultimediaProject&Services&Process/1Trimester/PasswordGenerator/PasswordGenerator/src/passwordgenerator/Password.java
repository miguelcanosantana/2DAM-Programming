package passwordgenerator;

//Password Class
public class Password{
  
  //Attributes
  private String pswd;
  private Integer howLong = 8; //Default long is 8

  
  //Getters and Setters
  public String getPass() {
    return pswd;
  }

  public Integer getHowLong() {
    return howLong;
  }

  public void setPass(String password) {
    this.pswd = password;
  }

  public void setLong(int numberOfCharacters) {
    this.howLong = numberOfCharacters;
  }
  
  
  //Methods
  
  //Generates a random character based on the "allChars" String
  public String generateRanChar() {
    String allChars = "abcdefghijklmnñopqrstuvwxyzçABCDEFGHIJKLMNÑOPQRSTUVWXYZÇ0123456789";
    int ranNumb = (int) (Math.random() * allChars.length());
    char rawChar = allChars.charAt(ranNumb);
    String stringedChar = Character.toString(rawChar);
    
    return stringedChar;
  }
  
  
  //Generate a Password using Random Characters and return it
  public String generatePswd() {
    int numOfChar = this.getHowLong();
    String paswdText = "";

    for (int i = 0; i < numOfChar; i++) {
      paswdText += generateRanChar();
    }
    
    this.setPass(paswdText);
    
    return null;
  }
  
  
  //Check if Password is strong enough 
  //(At least 1 or + lowercase, 2 or + uppercases and 2 or + numbers)
  public boolean isStrong() {
    String lower = "abcdefghijklmnñopqrstuvwxyzç";
    int lowerCount = 0;
    String upper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÇ";
    int upperCount = 0;
    String numbers = "0123456789";
    int numberCount = 0;
    String pass = this.pswd;
    
    //Repeat for the entire String
    for (int i = 0; i < pass.length(); i++) {
      
      //Check lowers
      for (int j = 0; j < lower.length(); j++) {
        if (pass.charAt(i) == lower.charAt(j)) lowerCount++;
      }
      
      //Check uppers
      for (int k = 0; k < upper.length(); k++) {
        if (pass.charAt(i) == upper.charAt(k)) upperCount++;
      }
      
      //Check numbers
      for (int u = 0; u < numbers.length(); u++) {
        if (pass.charAt(i) == numbers.charAt(u)) numberCount++;
      }
      
    }
    //Check Final conditions
    if ((lowerCount >= 1) && (upperCount >= 2) && (numberCount >= 2)) return true;
    else return false;
  }
  
  
  //ToString to Print
  @Override
  public String toString() {
    return "\n" + "|Password => " + pswd + "\n|Length => " + howLong + "\n|Is Secure? => " 
      + this.isStrong() + "\n";
  }
  
  
}


