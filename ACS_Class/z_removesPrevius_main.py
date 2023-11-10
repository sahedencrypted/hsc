import json
import os

# Specify the path to the JSON file
file_path = "ACS_Class/assets/json/vhsc.json"

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
    line = input().strip()  # Use strip() to remove leading and trailing whitespaces
    if not line:
        break
    title_lines.append(line)

# Input the "vdoID" data as multiple lines (changed from "pdfID")
print("Enter the vdoIDs (one line at a time, press Enter to finish, leave an empty line to finish vdoIDs):")
vdoID_lines = []
while True:
    line = input()
    if not line:
        break
    vdoID_lines.append(line)

# Check if the number of lines in "title" and "vdoID" matches
if len(title_lines) != len(vdoID_lines):
    print("The number of lines in 'title' and 'vdoID' doesn't match. Please enter the same number of lines.")
else:
    # Overwrite the existing data with the new data for the specified key
    existing_data[key] = {
        "title": title_lines,
        "vdoID": vdoID_lines  # Changed from "pdfID"
    }

    # Save the updated data back to the JSON file
    with open(file_path, 'w', encoding='utf-8') as json_file:
        json.dump(existing_data, json_file, indent=2, ensure_ascii=False)

    print(f"Data has been updated in {key}")
