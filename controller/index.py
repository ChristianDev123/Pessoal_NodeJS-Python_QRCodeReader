from PIL import Image
from pyzbar.pyzbar import decode
textQR = decode(Image.open('../public/Image_teste_utf8.png'))
print(textQR[0].data.decode("UTF-8"))