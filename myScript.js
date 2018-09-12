      function generateXYZ() {
         
         var N=document.getElementById("id_num_atoms").value;
         var dmin=document.getElementById("id_min_distance").value;
         var dmax=document.getElementById("id_max_distance").value;
         
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

        var transformBallAndStick = new ChemDoodle.TransformCanvas3D('transformBallAndStick', 250, 250);
        transformBallAndStick.specs.set3DRepresentation('Ball and Stick');
        transformBallAndStick.specs.backgroundColor = 'black';
        //var my_cluster_file = '6\n Energy: -228.220125798 ; Optim ; Step: 0 ; Attempt: 1\n 6 -1.051634 0.636761  0.000244\n 6 -0.025625 -1.229044 0.000785\n 6 1.186967  -0.718702 -0.000442\n 6 1.077272  0.592333  0.000017\n 6 0.028957  1.387229  0.000038 \n 6 -1.215938 -0.668576 -0.000643\n \n';
        var molecule = ChemDoodle.readXYZ(xyzFile, 1);
        transformBallAndStick.loadMolecule(molecule);
         
      }

