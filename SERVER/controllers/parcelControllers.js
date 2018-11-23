import parcels from '../data/parcelData';

const parcelController={
    create(req,res){
        const{ origin,destination,weight }=req.body;
        const newParcel={
            id:(parcels.length+1).toString(),
            userId:"5",
            origin,
            destination,
            weight,
            status:"pending",
        }
    parcels.push(newParcel);
    return res.status(201).send(newParcel);
    },
    getParcels(req,res){
        return res.status(200).send(parcels);
    },
    getParcelById(req,res){
        const id=req.params.id;
        const oneParcel=parcels.find(parcel => parcel.id===id);
        return res.status(200).send(oneParcel);
    },
    cancelParcel(req,res){
        const id=req.params.id;
        const oneParcel=parcels.find(parcel => parcel.id===id);
        const index=parcels.indexOf(oneParcel);
        parcels[index].status="canceled";
        return res.status(201).send(parcels[index]);
    },
    getParcelsOfUser(req,res){
     const userId=req.params.userId
     const allParcels=parcels.filter(parcel=>parcel.userId===userId);
     return res.status(200).send(allParcels);
    }
}
export default parcelController;