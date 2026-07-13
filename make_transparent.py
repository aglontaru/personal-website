from PIL import Image
import os
import glob

# Remove white background from PNGs
def make_white_transparent(img_path):
    try:
        img = Image.open(img_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Change all white (also shades of white) to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(img_path, "PNG")
        print(f"Processed: {img_path}")
    except Exception as e:
        print(f"Failed processing {img_path}: {e}")

# Apply to all PNGs
for f in glob.glob('public/logos/*.png'):
    make_white_transparent(f)
