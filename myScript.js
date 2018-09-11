      function generateXYZ() {
         
         var N=document.getElementById("id_num_atoms").value;
         var dmin=document.getElementById("id_min_distance").value;
         var dmax=document.getElementById("id_max_distance").value;
         
         var xyzString="";
         var i=0;
         var myRnd=0.0;
         var x=[];
         var y=[];
         var z=[];

         if (N<2)  N=2;
         if (N>10) N=10;
         if (dmin<0.5)   dmin=0.5
         if (dmax<0.6)   dmax=0.6
         if (dmin==dmax) dmax=dmin+1.0

         for (i = 0; i < N; i++) { 
            x[i]=Math.random() * 10 + 1
            y[i]=Math.random() * 10 + 1
            z[i]=Math.random() * 10 + 1

            xyzString = xyzString + x[i].toFixed(6) + " " + y[i].toFixed(6) + " " + z[i].toFixed(6) + "<br>";

         }
         for (i = 0; i < 10; i++) {

            console.log(x[i]);

            document.getElementById("id_xyz_string").innerHTML = xyzString;
         }

         
      }

