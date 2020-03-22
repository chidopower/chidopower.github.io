      function generateXYZ() {
         
         var N=document.getElementById("id_num_atoms").value;
         var dmin=document.getElementById("id_min_distance").value;
         var dmax=document.getElementById("id_max_distance").value;
         var  vol=document.getElementById("id_max_volume").value;
         
         var xyzString="";
         var xyzFile="";
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

         xyzString = xyzString + N + "<br>A random atomic cluster.<br>";
         xyzFile = xyzFile + N + "\nA random atomic cluster.\n";

         for (i = 0; i < N; i++) { 
            x[i]=Math.random() * 4 + 1
            y[i]=Math.random() * 4 + 1
            z[i]=Math.random() * 4 + 1

            xyzString = xyzString + 6 + " " + x[i].toFixed(6) + " " + y[i].toFixed(6) + " " + z[i].toFixed(6) + "<br>";
            xyzFile = xyzFile + 6 + " " + x[i].toFixed(6) + " " + y[i].toFixed(6) + " " + z[i].toFixed(6) + "\n";

         }
         xyzString = xyzString + "<br>";
         xyzFile = xyzFile + " \n";

         for (i = 0; i < 10; i++) {

            console.log(x[i]);

            document.getElementById("id_xyz_string").innerHTML = xyzString;
         }


         
      }

