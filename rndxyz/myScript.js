      function generateXYZ() {
         
         var N=document.getElementById("id_num_atoms").value;
         var dmin=document.getElementById("id_min_distance").value;
         var dmax=document.getElementById("id_max_distance").value;
         var diamax=document.getElementById("id_max_diameter").value;
         
         var xyzString="";
         var xyzFile="";
         var distancesString="";
         var i=0,j=0,k=0;
         var myRnd=0.0;
         var x=[];
         var y=[];
         var z=[];
         var d=1.0;
         var dx=0.0,dy=0.0,dz=0.0;
         var dIsOk=false;

         if (N<2)  N=2;
         if (N>10) N=10;
         if (dmin<0.5)   dmin=0.5
         if (dmax<0.6)   dmax=0.6
         if (dmin==dmax) dmax=dmin+1.0

         xyzString = xyzString + N + "<br>A random atomic cluster.<br>";
         xyzFile = xyzFile + N + "\nA random atomic cluster.\n";

         for (i = 0; i < N; i++) { 

            if(i==0){
    
                x[i]=Math.random() * diamax/2.0 + 1.0;
                y[i]=Math.random() * diamax/2.0 + 1.0;
                z[i]=Math.random() * diamax/2.0 + 1.0;     

                x[i]=Math.random() < 0.5 ? x[i]*(-1) : x[i]; 
                y[i]=Math.random() < 0.5 ? y[i]*(-1) : y[i];
                z[i]=Math.random() < 0.5 ? z[i]*(-1) : z[i];
              
            }else{
                while(1){
                    //k++;
                x[i]=Math.random() * diamax/2.0 + 1.0;
                y[i]=Math.random() * diamax/2.0 + 1.0
                z[i]=Math.random() * diamax/2.0 + 1.0      

                x[i]=Math.random() < 0.5 ? -x[i] : x[i]; 
                y[i]=Math.random() < 0.5 ? -y[i] : y[i];
                z[i]=Math.random() < 0.5 ? -z[i] : z[i];
                    for(j=0; j<=i; j++){
                        if(j==i){
                            d=0.0;
                            distancesString = distancesString +i+" "+j+" "+d+"<br>";
                        }else{
                            dx= Math.pow(x[i]-x[j],2);
                            dy= Math.pow(y[i]-y[j],2);
                            dz= Math.pow(z[i]-z[j],2);
                            //console.log("dx",i,j,x[i],x[j],dx);
                            d = Math.sqrt(dx+dy+dz)
                            if(d>=dmin){
                                dIsOk=true;
                                distancesString = distancesString +i+" "+j+" "+d+"<br>";
                            }else{
                                dIsOk=false;
                                distancesString = distancesString +i+" "+j+" "+d+" FAIL!<br>";
                                break;
                            }
                            
                        }//if&else
                        
                    }//for
                    //console.log(i,j,k,dmin,d);
                    if(dIsOk==true)break;
                }//while
            }//if&else

            xyzString = xyzString + 6 + " " + x[i].toFixed(6) + " " + y[i].toFixed(6) + " " + z[i].toFixed(6) + "<br>";
            xyzFile = xyzFile + 6 + " " + x[i].toFixed(6) + " " + y[i].toFixed(6) + " " + z[i].toFixed(6) + "\n";

         }//for

         xyzString = xyzString + "<br>";
         xyzFile = xyzFile + " \n";

         for (i = 0; i < N; i++) {
            document.getElementById("id_xyz_string").innerHTML = xyzString;
         }

         document.getElementById("id_distances_").innerHTML = "Distances:";
         for (i = 0; i < N*N; i++) {
            document.getElementById("id_distances").innerHTML = distancesString;
         }         

        var transformBallAndStick = new ChemDoodle.TransformCanvas3D('transformBallAndStick', 250, 250);
        transformBallAndStick.specs.set3DRepresentation('Ball and Stick');
        transformBallAndStick.specs.backgroundColor = 'black';
        //var my_cluster_file = '6\n Energy: -228.220125798 ; Optim ; Step: 0 ; Attempt: 1\n 6 -1.051634 0.636761  0.000244\n 6 -0.025625 -1.229044 0.000785\n 6 1.186967  -0.718702 -0.000442\n 6 1.077272  0.592333  0.000017\n 6 0.028957  1.387229  0.000038 \n 6 -1.215938 -0.668576 -0.000643\n \n';
        var molecule = ChemDoodle.readXYZ(xyzFile, 1);
        transformBallAndStick.loadMolecule(molecule);
         
      }

function rndNumBetween(min,max){

    Math.random() * max + 1.0

}