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

var i = 1;

for(propiedadv of propiedades_venta){
    if(propiedadv.smoke === false && propiedadv.pets === false && i <= 3){
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
    } else if(propiedadv.smoke === true && propiedadv.pets === true && i <= 3){
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
    } else if(propiedadv.smoke === false && propiedadv.pets === true && i <= 3){
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
        if(i <= 3){
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
    i++
}

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazónde la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: [2,2],
        costo: 2.000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: [3,3],
        costo: 2.500,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: [2,2],    
        costo: 2.200,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Hacienda el Boldo',
        src: 'assets/img/alquiler-1.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Av. Curicó & El Raleo, Curicó, Chile, El Boldo, Curicó, Maule',
        habitaciones: [3,3],
        costo: 4.000,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Casa Madariaga',
        src: 'assets/img/alquiler-2.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Madariaga, Metro Pedro Aguirre Cerda, Pedro Aguirre Cerda, RM (Metropolitana)',
        habitaciones: [4,2],
        costo: 1.500,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Casa avenida Ochagavía',
        src: 'assets/img/alquiler-3.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Avenida Ochagavía, Las Acacias - Chena, San Bernardo, RM (Metropolitana)',
        habitaciones: [6,2],
        costo: 6.000,
        smoke: true,
        pets: false
    },

    {
        nombre: 'Casa Kintamani',
        src: 'assets/img/alquiler-4.webp',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Kintamani, Norte de Quilicura, Quilicura, RM (Metropolitana)',
        habitaciones: [3,2],
        costo: 2.500,
        smoke: false,
        pets: false
    }
]

const propiedadesAlquiler = document.querySelector('#contenedorAlquiler');

let alquiler = "";

var j = 1;

for(propiedad of propiedades_alquiler){
    if(propiedad.smoke === false && propiedad.pets === false && j <= 3){
        alquiler += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedad.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedad.nombre}</h5>
                <p>${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedad.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedad.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>

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
    } else if(propiedad.smoke === true && propiedad.pets === true && j <= 3){
        alquiler += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedad.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedad.nombre}</h5>
                <p>${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedad.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedad.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>

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
    } else if(propiedad.smoke === false && propiedad.pets === true && j <= 3){
        alquiler += `
        <div  class="col-md-4 mb-4">
        <div class="card">
            <div><img src="${propiedad.src}" width="100%;"></div>
            <div class="card-body">
                <h5>${propiedad.nombre}</h5>
                <p>${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i>${propiedad.habitaciones[0]}
                    <i class="fas fa-bath"></i>${propiedad.habitaciones[1]}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>

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
        if(j <= 3){
            alquiler += `
            <div  class="col-md-4 mb-4">
            <div class="card">
                <div><img src="${propiedad.src}" width="100%;"></div>
                <div class="card-body">
                    <h5>${propiedad.nombre}</h5>
                    <p>${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                    <p>
                        <i class="fas fa-bed"></i>${propiedad.habitaciones[0]}
                        <i class="fas fa-bath"></i>${propiedad.habitaciones[1]}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
    
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
    j++
}

propiedadesAlquiler.innerHTML = alquiler;

propiedadesVenta.innerHTML = venta;




