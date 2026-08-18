import os
from pypdf import PdfReader

pdf_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "HS-Manager-Brand-Guidelines.pdf")
r = PdfReader(pdf_path)
print("pages:", len(r.pages))
print("mediabox:", r.pages[0].mediabox)
for i, p in enumerate(r.pages):
    text = p.extract_text() or ""
    print(f"--- page {i+1} ---")
    print(text[:120].replace("\n", " | "))
