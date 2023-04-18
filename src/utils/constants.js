export const headers = {
    'Content-Type': 'application/json'
}

export const AlertTypes = {
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    INFO: "info"
}

export const EMAIL_RGX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;