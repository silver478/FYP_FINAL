import flask
from flask import render_template , request , jsonify

import sys
import sklearn
from tensorflow.keras.models import load_model
import cv2
import json
import os
import numpy as np
from time import sleep
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing import image
from PIL import Image
import urllib
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.naive_bayes import MultinomialNB
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pickle

app = flask.Flask(__name__)
app.config["DEBUG"] = True


model = load_model("model_(1).h5")


@app.route('/', methods=['POST'])
def home():
    file = request.get_json()
    if(file.get("fullname")!=''):
        resp = urllib.request.urlopen(file.get("fullname"))
        image = np.asarray(bytearray(resp.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        print("hello")
        emotion_labels = ['Angry','Disgust','Fear','Happy','Neutral', 'Sad', 'Surprise']    
        face_classifier = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
        img=cv2.imread("happy.jpg")
        gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
        labels = []
        faces = face_classifier.detectMultiScale(gray)
        for (x,y,w,h) in faces:
            print("sadasdsad")
            cv2.rectangle(image,(x,y),(x+w,y+h),(0,255,255),2)
            roi_gray = gray[y:y+h,x:x+w]
            roi_gray = cv2.resize(roi_gray,(48,48),interpolation=cv2.INTER_AREA)
            if np.sum([roi_gray])!=0:
                roi = roi_gray.astype('float')/255.0
                roi = img_to_array(roi)
                roi = np.expand_dims(roi,axis=0)
                prediction = model.predict(roi)[0]
                label=emotion_labels[prediction.argmax()]
                print(label)
                label_position = (x,y)
                cv2.putText(image,label,label_position,cv2.FONT_HERSHEY_SIMPLEX,1,(0,255,0),2)
            else:
                print("no faces",file=sys.stdout)
                cv2.putText(img,'No Faces',(30,80),cv2.FONT_HERSHEY_SIMPLEX,1,(0,255,0),2)
    
    
    if(label=="Happy"):
        filename="finalized_model_happpy.sav"
        loaded_model = pickle.load(open(filename, 'rb'))
        if(file.get("Gender")=="Male"):
            gen=1
        else:
            gen=0
        par=[[file.get("age"),gen]]
        predd=loaded_model.predict(par)

    if(label=="Sad"):
        filename="finalized_model_sad.sav"
        loaded_model = pickle.load(open(filename, 'rb'))
        if(file.get("Gender")=="Male"):
            gen=1
        else:
            gen=0
        par=[[file.get("age"),gen]]
        predd=loaded_model.predict(par)
    if(label=="Neutral"):
        filename="finalized_model_neutral.sav"
        loaded_model = pickle.load(open(filename, 'rb'))
        if(file.get("Gender")=="Male"):
            gen=1
        else:
            gen=0
        par=[[file.get("age"),gen]]
        predd=loaded_model.predict(par)   
    if(label=="Angry"):
        filename="finalized_model_angry.sav"
        loaded_model = pickle.load(open(filename, 'rb'))
        if(file.get("Gender")=="Male"):
            gen=1
        else:
            gen=0
        par=[[file.get("age"),gen]]
        predd=loaded_model.predict(par)
    if(predd==0):
        predd="Blue"
    elif(predd==1):
        predd="Green"
    elif(predd==2):
        predd="Red"
    else:
        predd="Yellow"
    print(predd)
    fi={"mood":label,"color":predd}
    return predd

app.run()