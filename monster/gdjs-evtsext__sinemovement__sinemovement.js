
gdjs.evtsExt__SineMovement__SineMovement = gdjs.evtsExt__SineMovement__SineMovement || {};

/**
 * Behavior generated from Sine Movement
 * @class SineMovement
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__SineMovement__SineMovement.SineMovement = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.SineSpeed = behaviorData.SineSpeed !== undefined ? behaviorData.SineSpeed : Number("60") || 0;
    this._behaviorData.AmplitudeX = behaviorData.AmplitudeX !== undefined ? behaviorData.AmplitudeX : Number("100") || 0;
    this._behaviorData.AmplitudeY = behaviorData.AmplitudeY !== undefined ? behaviorData.AmplitudeY : Number("0") || 0;
    this._behaviorData.InitialX = Number("0") || 0;
    this._behaviorData.InitialY = Number("0") || 0;
    this._behaviorData.SineProgress = Number("0") || 0;
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("SineMovement::SineMovement", gdjs.evtsExt__SineMovement__SineMovement.SineMovement);

// Properties:
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0x5b7598 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() == 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialY() == 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInitialX((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInitialY((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


{

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmplitudeX() > 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) + Math.cos(gdjs.toRad((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgress()))) * (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmplitudeX()));
}
}}

}


{

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmplitudeY() > 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialY()) + Math.sin(gdjs.toRad((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgress()))) * (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmplitudeY()));
}
}}

}


{


{
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgress(gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgress() + ((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0x5b7598


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0x5b7598(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._getSineSpeed = function() {
    return this._behaviorData.SineSpeed !== undefined ? this._behaviorData.SineSpeed : Number("60") || 0;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._setSineSpeed = function(newValue) {
    this._behaviorData.SineSpeed = newValue;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._getAmplitudeX = function() {
    return this._behaviorData.AmplitudeX !== undefined ? this._behaviorData.AmplitudeX : Number("100") || 0;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._setAmplitudeX = function(newValue) {
    this._behaviorData.AmplitudeX = newValue;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._getAmplitudeY = function() {
    return this._behaviorData.AmplitudeY !== undefined ? this._behaviorData.AmplitudeY : Number("0") || 0;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._setAmplitudeY = function(newValue) {
    this._behaviorData.AmplitudeY = newValue;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._getInitialX = function() {
    return this._behaviorData.InitialX !== undefined ? this._behaviorData.InitialX : Number("0") || 0;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._setInitialX = function(newValue) {
    this._behaviorData.InitialX = newValue;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._getInitialY = function() {
    return this._behaviorData.InitialY !== undefined ? this._behaviorData.InitialY : Number("0") || 0;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._setInitialY = function(newValue) {
    this._behaviorData.InitialY = newValue;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._getSineProgress = function() {
    return this._behaviorData.SineProgress !== undefined ? this._behaviorData.SineProgress : Number("0") || 0;
};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype._setSineProgress = function(newValue) {
    this._behaviorData.SineProgress = newValue;
};
