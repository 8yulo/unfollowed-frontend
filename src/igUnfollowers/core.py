import re
import streamlit as st
import pandas as pd
from io import StringIO

# optional, but makes everything more user friendly
st.set_page_config(layout="wide")

def extract_usernames(file_path): # for some reason file_path is a list obj ?
    print(file_path)
    
    file_data = file_path.read()

    stringio = StringIO(file_path.getvalue().decode('utf-8'))
    content = stringio.read()

    #extract usernames from profile links
    pattern = r'https://www.instagram.com/([a-zA-Z0-9_.]+)'
    
    #find all user & return as a set
    usernames = set(re.findall(pattern, content))
    
    return usernames

def extract_not_following_back(followers_file, following_file):
    # Reads content of files
    followers = extract_usernames(followers_file)
    following = extract_usernames(following_file)

    # Find users not following back (make streamlit column)
    not_following_back = following - followers
    if not_following_back:
        for username in not_following_back:
            st.write(f"https://instagram.com/{username}")
    else:
        print("Everyone is following you back!")

    return not_following_back

def load_not_folowing_back(not_following_back):
    if not_following_back:
        st.write("Users not following you back:")
        for username in not_following_back:
            st.write(f"https://instagram.com/{username}")
    else:
        st.write("Everyone is following you back!")
    

def file_upload():
    followers_file = st.file_uploader("Upload following HTML file", type=["html"], accept_multiple_files=False)
    following_file = st.file_uploader("Upload followers HTML file", type=["html"], accept_multiple_files=False)
    if followers_file and following_file is not None:
        st.success("Files uploaded successfully!")
        extract_not_following_back(followers_file, following_file)
    else:
        st.warning("Please upload the required HTML files.")

def main():
    st.title("Check who is not following you back on Instagram")
    file_upload()

if __name__ == "__main__":
    main()
