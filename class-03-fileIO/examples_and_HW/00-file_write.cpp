#include <iostream>
#include <fstream>	//file input and output header

using namespace std;

int main() {
	
	//----------------------------------------------------
	//simple file writing
	//---------------------------------------------------

	//need to access files through ofstream objects
	// ofstream myFile();			// create a file object
	// myFile.open("file_write.txt"); 	//creates test.txt if it doesn't exist
	// myFile << "I love C++ and C++ loves me!\n";	//writes to myFile
	// myFile.close(); 			//disassociate this object with this file


	//----------------------------------------------------
	// one line version with optional ofstream constructor
	//----------------------------------------------------

	// ofstream myFile2("file_write.txt"); 
	// if (myFile2.is_open()) {	//if object is associated with an external file,
	// 	cout << "the file is open\n";
	// 	myFile2 << "this is my file. there are many like it, but this one is mine.\n";
	// } else {
	// 	cout << "myFile2 is not open\n";
	// }
	// myFile2.close();


	//----------------------------------------------------
	// continuous write
	//----------------------------------------------------

	ofstream theFile("file_write.txt");
	cout << "Enter player ID, name, and level.\n";
	cout << "Press Ctrl+C to quit\n";

	int idNum;
	string name;
	int level;

	while (cin >> idNum >> name >> level) {
		theFile << idNum << ' ' << name << ' ' << level << endl;
	}

	return 0;	
}