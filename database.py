import mysql.connector

dataBase = mysql.connector.connect(
    host ="localhost",
    user ="lcalegari",
    passwd ="funkymelon44"
)

#preparing a cursor object

cursorObject = dataBase.cursor()

#creating dataBase
cursorObject.execute("CREATE DATABASE NuFlightMatch")


#Source: https://www.geeksforgeeks.org/python-mysql-create-database/
