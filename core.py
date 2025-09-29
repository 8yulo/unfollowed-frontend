import re
import streamlit as st
import pandas as pd
from io import StringIO

st.set_page_config(layout="wide")

def extract_usernames(file_path): 
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

    # Find users not following back
    unfollower_count = 0
    not_following_back = following - followers

    st.markdown(f"<h4 style='text-align: center; color: grey; text-decoration: bold;'>There are {len(not_following_back)} users not following you back:</div>", unsafe_allow_html=True)
    if not_following_back:
        for username in not_following_back:
            unfollower_count += 1
            container = st.container(border=True)
            with container:
                st.markdown(
                f"""
                <div style="
                    display:flex;
                    align-items:center;
                    min-height:48px;
                ">
                  <h4 style="
                      width:44px;
                      margin:0;
                      text-align:right;
                      color:grey;
                      font-variant-numeric: tabular-nums;
                  ">{unfollower_count}</h4>

                  <h4 style="
                      flex:1;
                      margin:0;
                      text-align:center;
                  ">
                    <a href="/user/{username}" target="_self" class="username-link">
                      🪦 @{username}
                    </a>
                  </h4>
                </div>
                """,
                unsafe_allow_html=True
            )
    else:
            print("Everyone is following you back!")
    return not_following_back
    
def file_upload():
    left, right = st.columns(2)
    with left: 
        left_container = left.container(border=True)
        left_container.caption("### Upload followers HTML file")
        followers_file = left_container.file_uploader("Find -> 'followers_1.html' under connections", type=["html"], accept_multiple_files=False)
    with right:
        right_container = right.container(border=True)
        right_container.caption("### Upload following HTML file")
        following_file = right_container.file_uploader("Find -> 'following.html' under connections", type=["html"], accept_multiple_files=False)
   
    if followers_file and following_file is not None:
        st.success("Files uploaded successfully!")
        extract_not_following_back(followers_file, following_file)
    else:
        st.warning("Please upload the required HTML files.")

def main():
    st.markdown("<h1 style='text-align: center; color: black;'>IG Unfollower Analysis</h1>", unsafe_allow_html=True)
    st.markdown("<h4 style='text-align: center; color: grey;'>check profiles that don't follow you back 😢</h1>", unsafe_allow_html=True)
    file_upload()

if __name__ == "__main__":
    main()