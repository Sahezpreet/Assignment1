from flask import Flask
import sqlite3
from flask_cors import CORS,cross_origin#A Flask extension for handling Cross Origin Resource Sharing (CORS),
# making cross-origin AJAX possible.
#This package has a simple philosophy, when you want to enable CORS, you wish to enable it for all use cases on a domain. 
from flask import request,jsonify
app=Flask("_main_")
cors=CORS(app)
@app.route('/save/',methods=['POST'])
@cross_origin(allow_headers=['Content-Type','Authorization'])
def run():
    try:
        data=request.get_json()
        firstName=data['firstName']
        middleName=data['middleName']
        lastName=data['lastName']
        location=data['location']
        dateOfBirth=data['dateOfBirth']
        gender=data['gender']
        with sqlite3.connect("student.db") as con:
            cur=con.cursor()
            print("Connection Done")
            cur.execute("INSERT into student_info(first_name,middle_name,last_name,location,date_of_birth,gender) values(?,?,?,?,?,?)",(firstName,middleName,lastName,location,dateOfBirth,gender))
            con.commit()
            cur.close()
        return jsonify({"response":"Success"})
    except Exception as err:
        print(err)
        return("Error")

@app.route('/contact/',methods=['POST'])
@cross_origin(allow_headers=['Content-Type','Authorization'])
def newrun():
    try:
        data=request.get_json()
        emailId=data['emailId']
        contactNumber=data['contactNumber']
        githubLink=data['githubLink']
        linkedLink=data['linkedLink']
        with sqlite3.connect("student.db") as con:
            cur=con.cursor()
            print("Connection Done")
            cur.execute("INSERT into student_info(email_id,contact_number,github_link,linkedin_link) values(?,?,?,?)",(emailId,contactNumber,githubLink,linkedLink))
            con.commit()
            cur.close()
        return jsonify({"response":"Success"})
    except Exception as err:
        print(err)
        return("Error")

@app.route('/academic/',methods=['POST'])
@cross_origin(allow_headers=['Content-Type','Authorization'])
def acad():
    try:
        data=request.get_json()
        college=data['college']
        degree=data['degree']
        yearFrom=data['yearFrom']
        yearTo=data['yearTo']
        with sqlite3.connect("student.db") as con:
            cur=con.cursor()
            print("connection done")
            cur.execute("INSERT into academic_info(college_name,degree,year_from,year_to) values(?,?,?,?)",(college,degree,yearFrom,yearTo))
            con.commit()
            cur.close()
        return jsonify({"response":"Success"})
    except Exception as err:
        print(err)
        return("Error")


if __name__=="__main__":
    app.run(debug=True,host='127.0.0.1',port='5050')