window.onload=function(){

	group = document.getElementsByClassName("group")[0]
	front = document.getElementsByClassName("front")[0]

	folder = "imgs/"


	if(typeof(inn) == "undefined"){
		inn = document.createElement("img")
		inn.id = "inn"
		inn.style.transform = "scale(1) translate(0px,0px)"
		document.body.appendChild(inn)
	}

	s = inn.style
	st = inn.style.transform

	n = group.querySelectorAll("img")

	var z = []
	n.forEach(function(e){
		z[z.length] = n[z.length]
	})


	n.forEach(function(e){
		e.onclick=function(){

			name_file = this.src.match(/[^/]*$/)[0]

			local = folder+name_file;

			inn.src = local

			inn.style.display="flex"

			x=0
			y=0
			zoom=1

			inn.style.transform = "scale(1) translate(0px,0px)"

		}
	})

	
	inn.onwheel=function(e){
		
		zoom += (e.deltaY == -100) ? .1*2 : -.1*2

		if(zoom < .2) zoom = .2

			control(e)
	}

	inn.onmousemove=function(e){
		control(e)
	}

	inn.ondragstart=function(e){return false}

	window.onkeyup=function(e){
		if(e.key == "Escape") inn.style.display='none'
	}


	function control(e){

		document.body.style.overflow="hidden"

		st = inn.style.transform

		if(e.buttons == 1){
			x += e.movementX
			y += e.movementY
		}

		a = [zoom,x,y]

		s.transform = st.replace(/[-\d+\.]+/g,function(e){
			return a.shift()
		})

	}

}


