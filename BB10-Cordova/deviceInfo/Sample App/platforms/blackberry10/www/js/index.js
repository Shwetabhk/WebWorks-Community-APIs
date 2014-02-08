/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
		app.testPluginCalls();
	},
	testPluginCalls: function() {
		if (community && community.deviceInfo) {
			// app.writeOut(community.deviceInfo.getModelNumber());
			// app.writeOut(community.deviceInfo.isSimulator());
			// app.writeOut(community.deviceInfo.getRoamingStatus());
			// app.writeOut(community.deviceInfo.hasPhysicalKeyboard());
			// app.writeOut(community.deviceInfo.getNetwork());
			// app.writeOut(community.deviceInfo.getMCC());
			// app.writeOut(community.deviceInfo.getMNC());
			div = document.getElementById('model');
            div.innerText = 'Device Model is: ' + community.deviceInfo.getModelNumber();
            div.className = 'invoked';

            div = document.getElementById('mcc');
            div.innerHTML = 'MCC is: ' + community.deviceInfo.getMCC();
            div.className = 'invoked';

            div = document.getElementById('mnc');
            div.innerHTML = 'MNC is: ' + community.deviceInfo.getMNC();
            div.className = 'invoked';
                
            div = document.getElementById('roaming');
            div.innerHTML = 'Roaming status is: ' + community.deviceInfo.getRoamingStatus();
            div.className = 'invoked';

            div = document.getElementById('simulator');
            if(community.deviceInfo.isSimulator() == "true"){
            	 div.innerHTML = "It's a simulator.";
            }
            else{
            	 div.innerHTML = "It's not a simulator.";
            }
            div.className = 'invoked';

            div = document.getElementById('keyboard');
            if(community.deviceInfo.hasPhysicalKeyboard()){
            	 div.innerHTML = "It has a physical keyboard.";
            }
            else{
            	 div.innerHTML = "It doesn't have a physical keyboard.";
            }
            div.className = 'invoked';

		} else {
			app.writeOut("Plugin was not found");
		}
	},
	writeOut: function(message) {
		var output = document.getElementById('results');
		output.innerText = output.innerText + message;
		output.appendChild(document.createElement('br'));
		console.log(message);
	}
};
