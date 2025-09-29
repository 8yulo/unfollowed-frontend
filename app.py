import streamlit as st


def require_session(key, default):
    if key not in st.session_state:
        st.session_state[key] = default