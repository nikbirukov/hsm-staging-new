import os
import pypdfium2 as pdfium

d = os.path.dirname(os.path.abspath(__file__))
pdf = pdfium.PdfDocument(os.path.join(d, "HS-Manager-Brand-Guidelines.pdf"))
for idx in [0, 3, 5]:
    page = pdf[idx]
    bitmap = page.render(scale=2.0)
    pil_image = bitmap.to_pil()
    out = os.path.join(d, f"check_page_{idx+1}.png")
    pil_image.save(out)
    print("saved", out)
