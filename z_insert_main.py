import json
import os

# Specify the path to the JSON file
file_path = "assets/json/hsc.json"

# Load existing data from the JSON file (if it exists)
existing_data = {}
if os.path.exists(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as json_file:
            existing_data = json.load(json_file)
    except (json.JSONDecodeError, FileNotFoundError):
        print(f"The JSON file at {file_path} is empty or contains invalid JSON data.")
        existing_data = {}

# Input the key for the new data
key = input("Enter the key (e.g., cata1subjs1chapt1): ")

# Input the "title" data as multiple lines
print("Enter the titles (one line at a time, press Enter to finish, leave an empty line to finish titles):")
title_lines = []
while True:
    line = input()
    if not line:
        break
    title_lines.append(line)

# Input the "pdfID" data as multiple lines
print("Enter the pdfIDs (one line at a time, press Enter to finish, leave an empty line to finish pdfIDs):")
pdfid_lines = []
while True:
    line = input()
    if not line:
        break
    pdfid_lines.append(line)

# Check if the number of lines in "title" and "pdfID" matches
if len(title_lines) != len(pdfid_lines):
    print("The number of lines in 'title' and 'pdfID' doesn't match. Please enter the same number of lines.")
else:
    # Check if the key already exists in the existing data
    if key in existing_data:
        # If it exists, append the new titles and pdfIDs to the existing lists
        existing_data[key]["title"].extend(title_lines)
        existing_data[key]["pdfID"].extend(pdfid_lines)
    else:
        # If it doesn't exist, create new data
        existing_data[key] = {
            "title": title_lines,
            "pdfID": pdfid_lines
        }

    # Save the updated data back to the JSON file
    with open(file_path, 'w', encoding='utf-8') as json_file:
        json.dump(existing_data, json_file, indent=2, ensure_ascii=False)

    print(f"Data has been updated in {key}")
