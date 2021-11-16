export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
   changeColor: boolean = false;
	isSpaceDebris(): boolean {
		if(this.type === "Space Debris"){
			alert("Space Debris detected")
			return changeColor = true;
   			}else {
				   return false;
			   }
	}
	ngOnInit(){}

}

// TODO 3a: fix isSpaceDebris check
