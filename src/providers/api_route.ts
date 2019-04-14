import { Injectable } from '@angular/core';

const CONFIG = {
	apiUrl: 'http://mascot.asnasoftwaresolution.com/',
};
@Injectable()
export class AppSetting {
	
	constructor() {
		// code...
	}


	public getApiURL(){
		return CONFIG.apiUrl;
	}
}