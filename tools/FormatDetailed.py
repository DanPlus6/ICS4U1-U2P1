from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT/'data'

FNAME = 'BIN_detailed'
RAW_EXT = '.txt'
RES_EXT = '.json'

stripChars = ['-', ' ', '–', '\n']
stripTable = str.maketrans('','',''.join(stripChars))

parsedData = {}
cleanedData = []
with open(DATA_DIR/(FNAME+RAW_EXT),'r') as f:
    cleanedData = [ln.translate(stripTable) for ln in f.readlines()]
    # TODO: fix data cleaning and splitting system


for ln in f.readlines():
    cleanedData.append(ln.translate())

for ln in cleanedData:
    try:
        if not ln: continue
        number,issuer = ln.split('-',1)
        for c in stripChars:
            number = number.strip(c)
            issuer = issuer.strip(c)
        
        parsedData[issuer] = number
    except Exception as e:
        print(f"Err: '{ln}' || {e}")

with open(DATA_DIR/(FNAME+RES_EXT),'w') as f:
    f.write(json.dumps(parsedData,indent=4))
