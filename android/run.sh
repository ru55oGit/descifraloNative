#!/bin/bash

./gradlew ${1:-installDevDebug} --stacktrace && adb shell am start -n ar.com.descifralo.rncom.descifralodescifralo/host.exp.exponent.MainActivity
