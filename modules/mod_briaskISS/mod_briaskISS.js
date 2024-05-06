var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//This file is part of briaskISS.
//
//    briaskISS is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    briaskISS is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with briaskISS.  If not, see <http://www.gnu.org/licenses/>.

function briaskISS(idModule, random, picInterval, transDelay, picArray)
{
	this.picRandom = random;
	this.picInterval = picInterval;
	this.transDelay = transDelay;
	this.picArray = picArray;

	this.curPic = 0;
	this.nextPic = 0;
	this.numPics = 0;
	this.curOpacity = 99
	this.nextOpacity = 0;

	this.idModule = idModule;

	this.initISS();
}

briaskISS.prototype.initISS=function()
{
	if (!document.getElementById || !document.createElement) return;

	this.picArray[0]
		= document.getElementById("briask-iss"+this.idModule).getElementsByTagName("img");

	this.numPics = this.picArray[0].length ;

	for(i = 0; i < this.picArray[0].length; i++)
		{
			this.picArray[0][i].opacity = 0;
			this.picArray[0][i].style.MozOpacity = .0;
			this.picArray[0][i].style.filter = "alpha(opacity=0)";
		}

	if (this.picRandom == 3)
	{
		this.issNextPic();
	}

	this.picArray[0][this.nextPic].style.display = "block";
	this.picArray[0][this.nextPic].style.opacity = .99;
	this.picArray[0][this.nextPic].style.MozOpacity = .99;
	this.picArray[0][this.nextPic].style.filter = "alpha(opacity=" + (.99*100) + ")";

	this.curPic = this.nextPic;
	setTimeout("briaskInstance"+this.idModule+".issShow()", this.picInterval);
}

briaskISS.prototype.issShow=function()
{
	this.issNextPic();

	this.curOpacity = 100, this.nextOpacity = 0;

	setTimeout("briaskInstance"+this.idModule+".issTransition()", this.transDelay);
}

briaskISS.prototype.issNextPic=function()
{
	if (this.picRandom < 3)
	{
		if (this.curPic < (this.numPics - 1))
		{
			this.nextPic = this.curPic + 1;
		}
		else
		{
			this.nextPic = 0;
		}
	}
	else
	{
		do
		{
			now = new Date();

			var rndPic = Math.ceil(this.numPics * Math.random(this.idModule)) - 1;

		} 	while (this.curPic == rndPic)

		this.nextPic = rndPic;
	}
}

briaskISS.prototype.issTransition = function ()
{
	this.picArray[0][this.nextPic].style.display = "block";

	this.picArray[0][this.curPic].style.opacity = this.curOpacity/100;
	this.picArray[0][this.curPic].style.MozOpacity = this.curOpacity/100;
	this.picArray[0][this.curPic].style.filter = "alpha(opacity=" + (this.curOpacity) + ")";

	this.picArray[0][this.nextPic].style.opacity = this.nextOpacity/100;
	this.picArray[0][this.nextPic].style.MozOpacity = this.nextOpacity/100;
	this.picArray[0][this.nextPic].style.filter = "alpha(opacity=" + (this.nextOpacity) + ")";

	if (this.curOpacity > 0)
	{
		this.curOpacity -= 4;
		this.nextOpacity += 4;
		setTimeout("briaskInstance"+this.idModule+".issTransition()", this.transDelay);
	}
	else
	{
		this.picArray[0][this.curPic].style.display = "none";

		this.curPic = this.nextPic;
		setTimeout("briaskInstance"+this.idModule+".issShow()", this.picInterval);
	}
}


}
/*
     FILE ARCHIVED ON 04:56:11 Dec 31, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:00:53 May 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.644
  exclusion.robots: 0.198
  exclusion.robots.policy: 0.186
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 93.725 (3)
  PetaboxLoader3.datanode: 40.366 (4)
  PetaboxLoader3.resolve: 96.797 (2)
  load_resource: 74.374
*/