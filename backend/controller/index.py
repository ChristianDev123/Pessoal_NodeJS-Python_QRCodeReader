from array import array
from PIL import Image
from pathlib import Path
from pyzbar.pyzbar import decode
import sys

nameImage = sys.argv[1] 
pathImage = str(Path(__file__)).split('\\')
pathImage = pathImage[0:len(pathImage)-2]
pathImage = "\\".join(pathImage)
pathImage = f"{pathImage}\\public\\{nameImage}"
textQR = decode(Image.open(pathImage))
print(textQR[0].data.decode("UTF-8"))