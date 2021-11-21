package com.commio.plugins.mobile;

import android.util.Log;

public class CommioMobile {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
