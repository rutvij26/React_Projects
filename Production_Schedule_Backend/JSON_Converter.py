from flask_jsonpify import jsonpify
from pandas.core.frame import DataFrame


class JSON () :
    def __init__(self, df: DataFrame) -> None:
        self.df = df
        
    def df_to_JSON(self):
        return self.df.to_json(orient="records")