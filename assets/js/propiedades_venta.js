const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: [4,4],
        costo: 5.000,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: [2,1],
        costo: 1.200,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: [3,3],
        costo: 4.500,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Casa san potato',
        src: 'assets/img/venta-1.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Condominio Arayan, El Arrayán, Lo Barnechea, RM (Metropolitana)',
        habitaciones: [6,2],
        costo: 7.000,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Casa san pascual',
        src: 'assets/img/venta-2.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'San Pascual, Metro Escuela Militar, Las Condes, RM (Metropolitana)',
        habitaciones: [5,2],
        costo: 5.000,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Casa las condes',
        src: 'assets/img/venta-3.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Lo Fontecilla, Estoril, Las Condes, RM (Metropolitana)',
        habitaciones: [7,3],
        costo: 8.000,
        smoke: true,
        pets: false
    },

    {
        nombre: 'Rica Casa',
        src: 'assets/img/venta-4.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Fernando De Arguello 7178, Vitacura, Chile, Villa El Dorado, Vitacura, RM (Metropolitana)',
        habitaciones: [4,2],
        costo: 6.000,
        smoke: false,
        pets: true
    }
]

const propiedadesVenta = document.querySelector('#contenedorVentas');

let venta = "";


for(propiedadv of propiedades_venta){
    if(propiedadv.smoke === false && propiedadv.pets === false){
        venta += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedadv.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedadv.nombre}</h5>
                <p>${propiedadv.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedadv.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedadv.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedadv.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedadv.costo}</p>

                <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                </p>
            </div>
        </div>
        </div>
        `
    } else if(propiedadv.smoke === true && propiedadv.pets === true){
        venta += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedadv.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedadv.nombre}</h5>
                <p>${propiedadv.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedadv.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedadv.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedadv.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedadv.costo}</p>

                <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
            </div>
        </div>
        </div>
        `
    } else if(propiedadv.smoke === false && propiedadv.pets === true){
        venta += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedadv.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedadv.nombre}</h5>
                <p>${propiedadv.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedadv.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedadv.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedadv.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedadv.costo}</p>

                <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
            </div>
        </div>
        </div>
        `
    } else{
        venta += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedadv.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedadv.nombre}</h5>
                <p>${propiedadv.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedadv.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedadv.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedadv.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedadv.costo}</p>

                <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                <p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                </p>
            </div>
        </div>
        </div>
        `
    }
}

propiedadesVenta.innerHTML = venta;