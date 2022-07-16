from flask import Flask, request
from flask.wrappers import Response
from flask_jsonpify import jsonpify
from flask_cors import CORS
import schedule
import JSON_Converter
import awkward as ak
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

requirement = schedule.Dummy_Requirement_spawner(size = 150).dataframe_generate()

schedule_obj = schedule.Production_Schedule(requirement)

@app.route("/schedule", methods=['GET'])
def get_schedule ():
    return JSON_Converter.JSON(schedule_obj.df).df_to_JSON()

@app.route("/planningSchedule", methods=['GET', 'POST'])
def planning_schedule ():
    if request.method=='POST':
        print("Post called")
        data = request.form.to_dict()
        k, v = next(iter(data.items()))
        DICT = json.loads(k)
        key, records = next(iter(DICT.items()))
        schedule_obj.update_dataframe(pd.DataFrame.from_records(records))
        return "SUCCESS"
    if request.method=='GET':
        return JSON_Converter.JSON(schedule_obj.df).df_to_JSON()


@app.route("/requirements", methods=['GET'])
def get_requirements ():
    return JSON_Converter.JSON(requirement).df_to_JSON()

if __name__ == '__main__':
    app.run(debug=True)