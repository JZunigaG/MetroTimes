INSERT INTO LINES(name) VALUES ('Linea 1: Pinar de Chamartin - Valdecarros.');
INSERT INTO LINES(name) VALUES ('Linea 2: Las Rosas - Cuatro Caminos.');
INSERT INTO LINES(name) VALUES ('Linea 3: Villaverde Alto - Moncloa.');
INSERT INTO LINES(name) VALUES ('Linea 4: Arguelles - Pinar de Chamartin.');
INSERT INTO LINES(name) VALUES ('Linea 5: Alameda de Osuna - Casa de Campo.');
INSERT INTO LINES(name) VALUES ('Linea 6: Circular.');
INSERT INTO LINES(name) VALUES ('Linea 7: Hospital del Henares - Pitis.');
INSERT INTO LINES(name) VALUES ('Linea 8: Nuevos Ministerios - Aeropuerto.');
INSERT INTO LINES(name) VALUES ('Linea 9: Mirasierra - Arganda del Rey.');
INSERT INTO LINES(name) VALUES ('Linea 10: Hospital Infanta Sofia - Puerta del Sur.');
INSERT INTO LINES(name) VALUES ('Linea 11: Plaza Eliptica - La Fortuna.');
INSERT INTO LINES(name) VALUES ('Linea 12: MetroSur.');
INSERT INTO LINES(name) VALUES ('ML1: Pinar de Chamartin - Las Tablas.');
INSERT INTO LINES(name) VALUES ('ML2: Colonia Jardin - Estacion de Aravaca.');
INSERT INTO LINES(name) VALUES ('ML3: Colonia Jardin - Puerta de Boadilla.');




INSERT INTO STATIONS(name,location) VALUES('Pinar de Chamartín (correspondencia con líneas 4 y Metro Ligero 1)'                     ,ST_GeomFromText('POINT(-3.66686 40.480141)' ,4326));
INSERT INTO STATIONS(name,location) VALUES('Bambú, Chamartín (correspondencia con línea 10 y con Cercanías y Largo Recorrido Renfe)',ST_GeomFromText('POINT(-3.676325 40.476791)',4326));
INSERT INTO STATIONS(name,location) VALUES('Plaza de Castilla (correspondencia con líneas 9 y 10 y con atubuses interurbanos)'      ,ST_GeomFromText('POINT(-3.68926 40.466915)' ,4326));
INSERT INTO STATIONS(name,location) VALUES('Valdeacederas'                                                                          ,ST_GeomFromText('POINT(-3.6951 40.464417)',4326));
INSERT INTO STATIONS(name,location) VALUES('Tetuán'                                                                                 ,ST_GeomFromText('POINT(-3.698298 40.460532)',4326));
INSERT INTO STATIONS(name,location) VALUES('Estrecho'                                                                               ,ST_GeomFromText('POINT(-3.703018 40.454262)',4326));
INSERT INTO STATIONS(name,location) VALUES('Alvarado'                                                                               ,ST_GeomFromText('POINT(-3.70334 40.450311)' ,4326));
INSERT INTO STATIONS(name,location) VALUES('Cuatro Caminos (correspondencia con líneas 2 y 6)'                                      ,ST_GeomFromText('POINT(-3.704005 40.446947)',4326));
INSERT INTO STATIONS(name,location) VALUES('Ríos Rosas'                                                                             ,ST_GeomFromText('POINT(-3.701345 40.440627)',4326));
INSERT INTO STATIONS(name,location) VALUES('Iglesia'                                                                                ,ST_GeomFromText('POINT(-3.699134 40.435058)',4326));
INSERT INTO STATIONS(name,location) VALUES('Bilbao (correspondencia con línea 4)'                                                   ,ST_GeomFromText('POINT(-3.702224 40.429064)',4326));
INSERT INTO STATIONS(name,location) VALUES('Tribunal (correspondencia con línea 10)'                                                ,ST_GeomFromText('POINT(-3.702224 40.429064)',4326));
INSERT INTO STATIONS(name,location) VALUES('Gran Vía (correspondencia con línea 5)'                                                 ,ST_GeomFromText('POINT(-3.701859 40.419982)',4326));
INSERT INTO STATIONS(name,location) VALUES('Sol (correspondencia con líneas 2 y 3)'                                                 ,ST_GeomFromText('POINT(-3.703533 40.416829)',4326));
INSERT INTO STATIONS(name,location) VALUES('Tirso de Molina'                                                                        ,ST_GeomFromText('POINT(-3.705293 40.412303)',4326));
INSERT INTO STATIONS(name,location) VALUES('Antón Martín'                                                                           ,ST_GeomFromText('POINT(-3.699392 40.412483)',4326));
INSERT INTO STATIONS(name,location) VALUES('Atocha (correspondencia con autobuses interurbanos)'                                    ,ST_GeomFromText('POINT(-3.692461 40.408856)',4326));
INSERT INTO STATIONS(name,location) VALUES('Atocha Renfe (correspondencia con Cercanías de Renfe)'                                  ,ST_GeomFromText('POINT(-3.689607 40.406503)',4326));
INSERT INTO STATIONS(name,location) VALUES('Menéndez Pelayo, Pacífico (correspondencia con línea 6)'                                ,ST_GeomFromText('POINT(-3.68096  40.404379)',4326));
INSERT INTO STATIONS(name,location) VALUES('Puente de Vallecas'                                                                     ,ST_GeomFromText('POINT(-3.669051 40.398153)',4326));
INSERT INTO STATIONS(name,location) VALUES('Nueva Numancia'                                                                         ,ST_GeomFromText('POINT(-3.66418  40.395522)',4326));
INSERT INTO STATIONS(name,location) VALUES('Portazgo'                                                                               ,ST_GeomFromText('POINT(-3.658687 40.392646)',4326));
INSERT INTO STATIONS(name,location) VALUES('Buenos Aires'                                                                           ,ST_GeomFromText('POINT(-3.653644 40.391322)',4326));
INSERT INTO STATIONS(name,location) VALUES('Alto del Arenal'                                                                        ,ST_GeomFromText('POINT(-3.644975 40.389557)',4326));
INSERT INTO STATIONS(name,location) VALUES('Miguel Hernández'                                                                       ,ST_GeomFromText('POINT(-3.639589 40.387318)',4326));
INSERT INTO STATIONS(name,location) VALUES('Sierra de Guadalupe (correspondencia con Cercanías de Renfe)'                           ,ST_GeomFromText('POINT(-3.624676 40.381794)',4326));
INSERT INTO STATIONS(name,location) VALUES('Villa de Vallecas'                                                                      ,ST_GeomFromText('POINT(-3.621393 40.379538)',4326));
INSERT INTO STATIONS(name,location) VALUES('Congosto'                                                                               ,ST_GeomFromText('POINT(-3.61884  40.372362)',4326));
INSERT INTO STATIONS(name,location) VALUES('La Gavia'                                                                               ,ST_GeomFromText('POINT(-3.614012 40.370188)',4326));
INSERT INTO STATIONS(name,location) VALUES('Las Suertes'                                                                            ,ST_GeomFromText('POINT(-3.599614 40.363223)',4326));
INSERT INTO STATIONS(name,location) VALUES('Valdecarros.'                                                                           ,ST_GeomFromText('POINT(-3.593176 40.3601)',4326));



INSERT INTO STATIONS(name,location) VALUES('Las Rosas'                                                        ,ST_GeomFromText('POINT(-3.603347 40.423755)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de Guadalajara'                                           ,ST_GeomFromText('POINT(-3.612059 40.422383)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alsacia'                                                          ,ST_GeomFromText('POINT(-3.62356  40.418299)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Almudena'                                                      ,ST_GeomFromText('POINT(-3.639203 40.423576)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Elipa'                                                         ,ST_GeomFromText('POINT(-3.648150 40.42745)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ventas (correspondencia con línea 5)'                             ,ST_GeomFromText('POINT(-3.663259 40.43108)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Manuel Becerra (correspondencia con línea 6)'                     ,ST_GeomFromText('POINT(-3.667916 40.42853)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Goya (correspondencia con línea 4)'                               ,ST_GeomFromText('POINT(-3.674448 40.42514)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Príncipe de Vergara (correspondencia con línea 9)'                ,ST_GeomFromText('POINT(-3.679725 40.42240)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Retiro'                                                           ,ST_GeomFromText('POINT(-3.685603 40.42112)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Banco de España (correspondencia con Cercanías de Renfe)'         ,ST_GeomFromText('POINT(-3.695973 40.41885)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Sevilla'                                                          ,ST_GeomFromText('POINT(-3.699149 40.41756)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Sol (correspondencia con líneas 1 y 3)'                           ,ST_GeomFromText('POINT(-3.703850 40.41919)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ópera (correspondencia con líneas 5 y Ramal Opera - Príncipe Pío)',ST_GeomFromText('POINT(-3.709351 40.41795)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Santo Domingo'                                                    ,ST_GeomFromText('POINT(-3.707745 40.42155)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Noviciado (correspondencia con líneas 3 y 10)'                    ,ST_GeomFromText('POINT(-3.707845 40.42567)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Bernardo (correspondencia con línea 4)'                       ,ST_GeomFromText('POINT(-3.706057 40.42988)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Quevedo'                                                          ,ST_GeomFromText('POINT(-3.704604 40.43315)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Canal (correspondencia con línea 7)'                              ,ST_GeomFromText('POINT(-3.704105 40.43925)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cuatro Caminos (correspondencia con líneas 1 y 6)'                ,ST_GeomFromText('POINT(-3.704105 40.43925)', 4326));



INSERT INTO STATIONS(name,location) VALUES('Villaverde Alto (correspondencia con Cercanías Renfe)'                                         ,ST_GeomFromText('POINT(-3.710065 40.340833)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Cristobal'                                                                                 ,ST_GeomFromText('POINT(-3.693212 40.343780)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Villaverde Bajo Cruce'                                                                         ,ST_GeomFromText('POINT(-3.692907 40.351259)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ciudad de los Ángeles'                                                                         ,ST_GeomFromText('POINT(-3.692264 40.359511)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Fermín-Orcasur'                                                                            ,ST_GeomFromText('POINT(-3.694733 40.369808)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Hospital 12 de Octubre'                                                                        ,ST_GeomFromText('POINT(-3.696543 40.374900)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Almendrales'                                                                                   ,ST_GeomFromText('POINT(-3.698040 40.383966)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Legazpi (correspondencia con línea 6 y con autobuses interurbanos)'                            ,ST_GeomFromText('POINT(-3.694908 40.393108)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Delicias'                                                                                      ,ST_GeomFromText('POINT(-3.693924 40.400045)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Palos de la Frontera (correspondencia con autobuses interurbanos)'                             ,ST_GeomFromText('POINT(-3.693885 40.402825)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Embajadores (correspondencia con línea 5, con Cercanías de Renfe y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.702528 40.404605)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Lavapies'                                                                                      ,ST_GeomFromText('POINT(-3.701249 40.408394)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Sol (correspondencia con líneas 1 y 2)'                                                        ,ST_GeomFromText('POINT(-3.702981 40.417544)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Callao (correspondencia con línea 5)'                                                          ,ST_GeomFromText('POINT(-3.705903 40.419264)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Plaza de España (correspondencia con líneas 2 y 10)'                                           ,ST_GeomFromText('POINT(-3.711583 40.424075)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ventura Rodríguez'                                                                             ,ST_GeomFromText('POINT(-3.713524 40.427133)', 4326));  
INSERT INTO STATIONS(name,location) VALUES('Argüelles (correspondencia con líneas 4 y 6)'                                                  ,ST_GeomFromText('POINT(-3.716816 40.431713)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Moncloa (correspondencia con línea 6 y con autobuses interurbanos)'                            ,ST_GeomFromText('POINT(-3.719190 40.434519)', 4326));


  



INSERT INTO STATIONS(name,location) VALUES('Argüelles (correspondencia con líneas 3 y 6)'                                          ,ST_GeomFromText('POINT(-3.716816 40.431713)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Bernardo (correspondencia con línea 2)'                                            ,ST_GeomFromText('POINT(-3.706057 40.429884)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Bilbao (correspondencia con línea 1)'                                                  ,ST_GeomFromText('POINT(-3.701129 40.429079)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alonso Martínez (correspondencia con líneas 5 y 10)'                                   ,ST_GeomFromText('POINT(-3.695565 40.426390)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Colón'                                                                                 ,ST_GeomFromText('POINT(-3.691986 40.425204)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Serrano'                                                                               ,ST_GeomFromText('POINT(-3.691986 40.425204)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Velázquez'                                                                             ,ST_GeomFromText('POINT(-3.691986 40.425204)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Goya (correspondencia con línea 2)'                                                    ,ST_GeomFromText('POINT(-3.687919 40.425142)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Lista'                                                                                 ,ST_GeomFromText('POINT(-3.681884 40.425796)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Diego de León (correspondencia con líneas 5 y 6)'                                      ,ST_GeomFromText('POINT(-3.675528 40.425126)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de América (correspondencia con líneas 6, 7, y 9 y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.675743 40.428201)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Prosperidad'                                                                           ,ST_GeomFromText('POINT(-3.674551 40.443993)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alfonso XIII'                                                                          ,ST_GeomFromText('POINT(-3.667132 40.448262)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de la Paz'                                                                     ,ST_GeomFromText('POINT(-3.66188  40.453536)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Arturo Soria'                                                                          ,ST_GeomFromText('POINT(-3.656140 40.456001)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Esperanza'                                                                             ,ST_GeomFromText('POINT(-3.645836 40.459641)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Canillas'                                                                              ,ST_GeomFromText('POINT(-3.635507 40.465014)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Mar de Cristal (correspondencia con línea 8)'                                          ,ST_GeomFromText('POINT(-3.638312 40.468983)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Lorenzo'                                                                           ,ST_GeomFromText('POINT(-3.639337 40.474571)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Parque de Santa María'                                                                 ,ST_GeomFromText('POINT(-3.645374 40.477283)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Hortaleza'                                                                             ,ST_GeomFromText('POINT(-3.652389 40.475454)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Manoteras'                                                                             ,ST_GeomFromText('POINT(-3.662876 40.476619)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pinar de Chamartín (correspondencia con línea 1 y Metro Ligero 1)'                     ,ST_GeomFromText('POINT(-3.665950 40.479735)', 4326));





INSERT INTO STATIONS(name,location) VALUES('Alameda de Osuna'                                                                          ,ST_GeomFromText('POINT(40.457789 -3.587533)', 4326));
INSERT INTO STATIONS(name,location) VALUES('El Capricho'                                                                               ,ST_GeomFromText('POINT(40.453446 -3.594099)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Canillejas (correspondencia con autobuses interurbanos)'                                   ,ST_GeomFromText('POINT(40.449396 -3.608197)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Torres Arias'                                                                              ,ST_GeomFromText('POINT(40.443681 -3.617016)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Suanzes'                                                                                   ,ST_GeomFromText('POINT(40.440807 -3.626822)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ciudad Líneal (correspondencia con autobuses interurbanos)'                                ,ST_GeomFromText('POINT(40.438031 -3.638173)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pueblo Nuevo (correspondencia con línea 7)'                                                ,ST_GeomFromText('POINT(40.435662 -3.642765)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Quintana'                                                                                  ,ST_GeomFromText('POINT(40.433588 -3.647443)', 4326));
INSERT INTO STATIONS(name,location) VALUES('El Carmen'                                                                                 ,ST_GeomFromText('POINT(40.431857 -3.657635)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ventas (correspondencia con línea 2'                                                       ,ST_GeomFromText('POINT(40.430828 -3.663665)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Diego de León (correspondencia con líneas 4 y 6 )'                                         ,ST_GeomFromText('POINT(40.43465  -3.675037)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Núñez de Balboa (correspondencia con línea 9)'                                             ,ST_GeomFromText('POINT(40.432788 -3.682676)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Rubén Darío'                                                                               ,ST_GeomFromText('POINT(40.433115 -3.689564)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alonso Martínez (correspondencia con líneas 4 y 10 )'                                      ,ST_GeomFromText('POINT(40.427708 -3.695959)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Chueca'                                                                                    ,ST_GeomFromText('POINT(40.422889 -3.697568)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Gran Vía (correspondencia con línea 1 )'                                                   ,ST_GeomFromText('POINT(40.419998 -3.701881)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Callao (correspondencia con línea 3 )'                                                     ,ST_GeomFromText('POINT(40.419851 -3.706065)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ópera (correspondencia con líneas 2 y Ramal)'                                              ,ST_GeomFromText('POINT(40.418413 -3.709863)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Latina'                                                                                 ,ST_GeomFromText('POINT(40.411274 -3.70819 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Puerta de Toledo'                                                                          ,ST_GeomFromText('POINT(40.40701  -3.711108)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Acacias (correspondencia con línea 3, con Cercanías de Renfe y con autobuses interurbanos)',ST_GeomFromText('POINT(40.403856 -3.706645)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pirámides (correspondencia con Cercanías de Renfe)'                                        ,ST_GeomFromText('POINT(-0 0)'               , 4326));
INSERT INTO STATIONS(name,location) VALUES('Marqués de Vadillo'                                                                        ,ST_GeomFromText('POINT(40.397336 -3.715957)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Urgel'                                                                                     ,ST_GeomFromText('POINT(40.393332 -3.72366)' , 4326));
INSERT INTO STATIONS(name,location) VALUES('Oporto (correspondencia con línea 6 y con autobuses interurbanos)'                         ,ST_GeomFromText('POINT(40.388446 -3.731364)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Vista Alegre'                                                                              ,ST_GeomFromText('POINT(40.389051 -3.739904)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Carabanchel'                                                                               ,ST_GeomFromText('POINT(40.388299 -3.744946)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Eugenia de Montijo'                                                                        ,ST_GeomFromText('POINT(40.384376 -3.751319)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Aluche (correspondencia con Cercanías de Renfe y con autobuses interurbanos)'              ,ST_GeomFromText('POINT(40.385635 -3.760718)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Empalme'                                                                                   ,ST_GeomFromText('POINT(40.390522 -3.765374)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Campamento (correspondencia con autobuses interurbanos)'                                   ,ST_GeomFromText('POINT(40.39482  -3.768142)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Casa de Campo (correspondencia con línea 10 ).'                                            ,ST_GeomFromText('POINT(40.403219 -3.760997)', 4326));






INSERT INTO STATIONS(name,location) VALUES('Laguna (correspondencia con Cercanías de Renfe)'                                                          ,ST_GeomFromText('POINT(-3.744367 40.403203)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Carpetana'                                                                                                ,ST_GeomFromText('POINT(-3.741106 40.392695)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Oporto (correspondencia con línea 5 y con autobuses interurbanos)'                                        ,ST_GeomFromText('POINT(-3.731342 40.388446)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Opañel'                                                                                                   ,ST_GeomFromText('POINT(-3.723167 40.386828)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Plaza Elíptica (correspondencia con línea 11 y con autobuses interurbanos)'                               ,ST_GeomFromText('POINT(-3.718489 40.384556)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Usera'                                                                                                    ,ST_GeomFromText('POINT(-3.706945 40.38704 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Legazpi (correspondencia con línea 3 y con autobuses interurbanos)'                                       ,ST_GeomFromText('POINT(-3.695143 40.391192)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Arganzuela-Planetario'                                                                                    ,ST_GeomFromText('POINT(-3.688663 40.39312 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Méndez Álvaro (correspondencia con Cercanías de Renfe y con autobuses interurbanos)'                      ,ST_GeomFromText('POINT(-3.678514 40.3958  )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pacífico (correspondencia con línea 1)'                                                                   ,ST_GeomFromText('POINT(-3.675252 40.401274)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Conde de Casal (correspondencia con autobuses interurbanos)'                                              ,ST_GeomFromText('POINT(-3.670445 40.406993)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Sainz de Baranda (correspondencia con línea 9)'                                                           ,ST_GeomFromText('POINT(-3.670167 40.415015)', 4326));
INSERT INTO STATIONS(name,location) VALUES('O Donnell'                                                                                                ,ST_GeomFromText('POINT(-3.668386 40.422628)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Manuel Becerra (correspondencia con línea 2)'                                                             ,ST_GeomFromText('POINT(-3.669287 40.427937)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Diego de León (correspondencia con líneas 4 y 5 )'                                                        ,ST_GeomFromText('POINT(-3.675016 40.43465 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de América (correspondencia con líneas 4, 7 y 9 y con autobuses interurbanos)'                    ,ST_GeomFromText('POINT(-3.676711 40.438047)', 4326));
INSERT INTO STATIONS(name,location) VALUES('República Argentina'                                                                                      ,ST_GeomFromText('POINT(-3.68405  40.443763)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Nuevos Ministerios (correspondencia con líneas 8 y 10 y con Cercanías de Renfe)'                          ,ST_GeomFromText('POINT(-3.692397 40.446392)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cuatro Caminos (correspondencia con líneas 1 y 2 )'                                                       ,ST_GeomFromText('POINT(-3.703962 40.448106)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Guzmán el Bueno (correspondencia con línea 7 )'                                                           ,ST_GeomFromText('POINT(-3.712352 40.446376)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Metropolitano'                                                                                            ,ST_GeomFromText('POINT(-3.719691 40.446522)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ciudad Universitaria'                                                                                     ,ST_GeomFromText('POINT(-3.726901 40.443534)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Moncloa (correspondencia con línea 3 y con autobuses interurbanos)'                                       ,ST_GeomFromText('POINT(-3.719154 40.43514 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Argüelles (correspondencia con líneas 3 y 4 )'                                                            ,ST_GeomFromText('POINT(-3.716 40.430616)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Príncipe Pío (correspondencia con líneas 10 y Ramal, con Cercanías de Renfe y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.720785 40.420668)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Puerta del Ángel'                                                                                         ,ST_GeomFromText('POINT(-3.727287 40.413904)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alto de Extremadura'                                                                                      ,ST_GeomFromText('POINT(-3.73896  40.409918)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Lucero.'                                                                                                  ,ST_GeomFromText('POINT(-3.745376 40.405065)', 4326));



   

Línea 7: Hospital del Henares - Pitis.
INSERT INTO STATIONS(name,location) VALUES('Hospital del Henares'                                                                     ,ST_GeomFromText('POINT(-3.534554 40.417613)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Henares'                                                                                  ,ST_GeomFromText('POINT(-3.527173 40.417744)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Jarama'                                                                                   ,ST_GeomFromText('POINT(-3.52552 40.423755)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Fernando'                                                                             ,ST_GeomFromText('POINT(-3.535412 40.424343)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Rambla'                                                                                ,ST_GeomFromText('POINT(-3.547944 40.425127)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Coslada Central (correspondencia con Cercanías de Renfe)'                                 ,ST_GeomFromText('POINT(-3.561204 40.423363)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Barrio del Puerto'                                                                        ,ST_GeomFromText('POINT(-3.569273 40.422465)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Estadio Olímpico (Cambio de tren)'                                                        ,ST_GeomFromText('POINT(-3.600214 40.433392)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Las Musas'                                                                                ,ST_GeomFromText('POINT(-3.607896 40.432968)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Blas'                                                                                 ,ST_GeomFromText('POINT(-3.615707 40.428068)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Simancas'                                                                                 ,ST_GeomFromText('POINT(-3.625813 40.42797 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('García Noblejas'                                                                          ,ST_GeomFromText('POINT(-3.633431 40.428443)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ascao'                                                                                    ,ST_GeomFromText('POINT(-3.641156 40.430126 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pueblo Nuevo (correspondencia con la línea 5)'                                            ,ST_GeomFromText('POINT(-3.642851 40.435646 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Barrio de la Concepción'                                                                  ,ST_GeomFromText('POINT(-3.652035 40.439125 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Parque de las Avenidas'                                                                   ,ST_GeomFromText('POINT(-3.662978 40.439909 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cartagena'                                                                                ,ST_GeomFromText('POINT(-3.672184 40.439827 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de América (correspondencia con las líneas 4, 6 y 9 y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.676775 40.438047 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Gregorio Marañón (correspondencia con la línea 10)'                                       ,ST_GeomFromText('POINT(-3.691517 40.439925 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alonso Cano'                                                                              ,ST_GeomFromText('POINT(-3.699263 40.438406 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Canal (correspondencia con la línea 2)'                                                   ,ST_GeomFromText('POINT(-3.704542 40.438374 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Islas Filipinas'                                                                          ,ST_GeomFromText('POINT(-3.713811 40.439059 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Guzmán el Bueno (correspondencia con la línea 6)'                                         ,ST_GeomFromText('POINT(-3.712288 40.446343)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Francos Rodríguez'                                                                        ,ST_GeomFromText('POINT(-3.71246 40.456466)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Valdezarza'                                                                               ,ST_GeomFromText('POINT(-3.715721 40.464597)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Antonio Machado'                                                                          ,ST_GeomFromText('POINT(-3.717931 40.470359)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Peñagrande'                                                                               ,ST_GeomFromText('POINT(-3.715807 40.475893)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de la Ilustración'                                                                ,ST_GeomFromText('POINT(-3.718403 40.480088)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Lacoma'                                                                                   ,ST_GeomFromText('POINT(-3.722974 40.485033)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pitis (correspondencia con Cercanías de Renfe).'                                          ,ST_GeomFromText('POINT(-3.726021 40.495102)', 4326));
  
  


 
 
 



INSERT INTO STATIONS(name,location) VALUES('Nuevos Ministerios (correspondencia con líneas 6 y 10 y con Cercanías de Renfe)',ST_GeomFromText('POINT(-3.692354 40.446408)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Colombia (correspondencia con línea 9)'                                         ,ST_GeomFromText('POINT(-3.67686 40.456336)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Pinar del Rey'                                                                  ,ST_GeomFromText('POINT(-3.648911 40.468147)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Mar de Cristal (correspondencia con la línea 4)'                                ,ST_GeomFromText('POINT(-3.638332 40.469421)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Campo de las Naciones'                                                          ,ST_GeomFromText('POINT(-3.616193 40.463899)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Aeropuerto T1-T2-T3'                                                            ,ST_GeomFromText('POINT(-3.56889 40.468596)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Barajas'                                                                        ,ST_GeomFromText('POINT(-3.582494 40.475746)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Aeropuerto T4.'                                                                 ,ST_GeomFromText('POINT(-3.594639 40.491218)', 4326)); 




 
Línea 9: Mirasierra - Arganda del Rey.
INSERT INTO STATIONS(name,location) VALUES('Mirasierra'                                                                               ,ST_GeomFromText('POINT(-3.716451 40.491071)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Herrera Oria'                                                                             ,ST_GeomFromText('POINT(-3.707245 40.484429)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Barrio del Pilar'                                                                         ,ST_GeomFromText('POINT(-3.703168 40.47684 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ventilla'                                                                                 ,ST_GeomFromText('POINT(-3.695959 40.46938 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Plaza de Castilla (correspondencia con líneas 1 y 10 y con autobuses interurbanos)'       ,ST_GeomFromText('POINT(-3.689264 40.46685 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Duque de Pastrana'                                                                        ,ST_GeomFromText('POINT(-3.679179 40.467258)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pío XII'                                                                                  ,ST_GeomFromText('POINT(-3.675831 40.462964)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Colombia (correspondencia con la línea 8)'                                                ,ST_GeomFromText('POINT(-3.677333 40.45632 )', 4326));
INSERT INTO STATIONS(name,location) VALUES('Concha Espina'                                                                            ,ST_GeomFromText('POINT(-3.677419 40.451405)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cruz del Rayo'                                                                            ,ST_GeomFromText('POINT(-3.677956 40.443991)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de América (correspondencia con las líneas 4, 6 y 7 y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.676647 40.437998)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Núñez de Balboa (correspondencia con la línea 5)'                                         ,ST_GeomFromText('POINT(-3.682633 40.432723)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Príncipe de Vergara (correspondencia con la línea 2)'                                     ,ST_GeomFromText('POINT(-3.680101 40.422971)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ibiza'                                                                                    ,ST_GeomFromText('POINT(-3.678599 40.418397)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Sainz de Baranda (correspondencia con la línea 6)'                                        ,ST_GeomFromText('POINT(-3.670059 40.415032)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Estrella'                                                                                 ,ST_GeomFromText('POINT(-3.661798 40.411503)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Vinateros'                                                                                ,ST_GeomFromText('POINT(-3.653000 40.410228)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Artilleros'                                                                               ,ST_GeomFromText('POINT(-3.641907 40.405147)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pavones'                                                                                  ,ST_GeomFromText('POINT(-3.635126 40.400457)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Valdebernardo'                                                                            ,ST_GeomFromText('POINT(-3.621951 40.400359)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Vicálvaro (correspondencia con autobuses interurbanos)'                                   ,ST_GeomFromText('POINT(-3.609441 40.404199)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Cipriano'                                                                             ,ST_GeomFromText('POINT(-3.602446 40.403856)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Puerta de Arganda (correspondencia con Cercanías de Renfe, Cambio de tren)'               ,ST_GeomFromText('POINT(-3.596009 40.400931)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Rivas Urbanizaciones'                                                                     ,ST_GeomFromText('POINT(-3.547300 40.366722)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Rivas Futura'                                                                             ,ST_GeomFromText('POINT(-3.524834 40.341343)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Rivas Vaciamadrid'                                                                        ,ST_GeomFromText('POINT(-3.520585 40.328389)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('La Poveda'                                                                                ,ST_GeomFromText('POINT(-3.477453 40.319015)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Arganda del Rey'                                                                          ,ST_GeomFromText('POINT(-3.447801 40.303814)', 4326)); 







Línea 10: Hospital Infanta Sofía - Puerta del Sur.
INSERT INTO STATIONS(name,location) VALUES('Hospital Infanta Sofía'                                                                                      ,ST_GeomFromText('POINT(-3.611501 40.55977)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Reyes Católicos'                                                                                             ,ST_GeomFromText('POINT(-3.623453 40.550363)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Baunatal'                                                                                                    ,ST_GeomFromText('POINT(-3.635148 40.554439)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Manuel de Falla'                                                                                             ,ST_GeomFromText('POINT(-3.646906 40.550477)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Marqués de la Valdavia'                                                                                      ,ST_GeomFromText('POINT(-3.637787 40.540792)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Moraleja'                                                                                                 ,ST_GeomFromText('POINT(-3.635620 40.531904)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Granja'                                                                                                   ,ST_GeomFromText('POINT(-3.658622 40.527533)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ronda de la Comunicación'                                                                                    ,ST_GeomFromText('POINT(-3.662828 40.515528)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Las Tablas (correspondencia con la línea Metro Ligero 1)'                                                    ,ST_GeomFromText('POINT(-3.669523 40.50835)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Montecarmelo'                                                                                                ,ST_GeomFromText('POINT(-3.695465 40.505006)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Tres Olivos (Cambio de tren)'                                                                                ,ST_GeomFromText('POINT(-3.695251 40.501188)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Fuencarral'                                                                                                  ,ST_GeomFromText('POINT(-3.692955 40.495069)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Begoña'                                                                                                      ,ST_GeomFromText('POINT(-3.686002 40.480512)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Chamartín (correspondencia con Renfe y con autobuses Interurbanos)'                                          ,ST_GeomFromText('POINT(-3.682934 40.47209)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Plaza de Castilla (correspondencia con líneas 1 y 9 y con autobuses Interurbanos)'                           ,ST_GeomFromText('POINT(-3.689157 40.466833)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cuzco'                                                                                                       ,ST_GeomFromText('POINT(-3.689908 40.458409)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Santiago Bernabeu'                                                                                           ,ST_GeomFromText('POINT(-3.690423 40.451552)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Nuevos Ministerios (correspondencia con línea 6 y 8 y con Cercanías de Renfe)'                               ,ST_GeomFromText('POINT(-3.692354 40.446425)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Gregorio Marañón ( correspondencia con la línea 7)'                                                          ,ST_GeomFromText('POINT(-3.691517 40.438259)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alonso Martínez (correspondencia con las líneas 4 y 5)'                                                      ,ST_GeomFromText('POINT(-3.695937 40.427692)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Tribunal (correspondencia con la línea 1)'                                                                   ,ST_GeomFromText('POINT(-3.701130 40.426156)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Plaza de España (correspondencia con la línea 2)'                                                            ,ST_GeomFromText('POINT(-3.711236 40.423674)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Príncipe Pío (correspondencia con las líneas 6 y Ramal, con Cercanías de Renfe y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.720592 40.420521)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Lago'                                                                                                        ,ST_GeomFromText('POINT(-3.735634 40.416420)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Batán'                                                                                                       ,ST_GeomFromText('POINT(-3.753122 40.407892)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Casa de Campo (correspondencia con la línea 5)'                                                              ,ST_GeomFromText('POINT(-3.761104 40.403252)', 4326)); 
INSERT INTO STATIONS(name,location) VALUES('Colonia Jardín (correspondencia con las líneas Metro Ligero 2 y Metro Ligero 3)'                             ,ST_GeomFromText('POINT(-3.774773 40.396666)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Aviación Española'                                                                                           ,ST_GeomFromText('POINT(-3.783914 40.383673)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cuatro Vientos (correspondencia Cercanías de Renfe)'                                                         ,ST_GeomFromText('POINT(-3.791724 40.377675)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Joaquín Vilumbrales'                                                                                         ,ST_GeomFromText('POINT(-3.807195 40.349831)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Puerta del Sur (correspondencia con línea 12)'                                                               ,ST_GeomFromText('POINT(-3.812152 40.345121)', 4326));






Línea 11: Plaza Elíptica - La Fortuna
INSERT INTO STATIONS(name,location) VALUES('Plaza Elíptica (correspondencia con la línea 6 y con autobuses interurbanos)',ST_GeomFromText('POINT(-3.718532 40.384621)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Abrantes'                                                                    ,ST_GeomFromText('POINT(-3.727931 40.380829)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pan Bendito'                                                                 ,ST_GeomFromText('POINT(-3.734153 40.375844)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Francisco'                                                               ,ST_GeomFromText('POINT(-3.739196 40.373245)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Carabanchel Alto'                                                            ,ST_GeomFromText('POINT(-3.751899 40.371969)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Peseta'                                                                   ,ST_GeomFromText('POINT(-3.756941 40.364171)', 4326));
INSERT INTO STATIONS(name,location) VALUES('La Fortuna'                                                                  ,ST_GeomFromText('POINT(-3.777927 40.357942)', 4326));




Línea 12: MetroSur
INSERT INTO STATIONS(name,location) VALUES('Puerta del Sur'                                                                       ,ST_GeomFromText('POINT(-3.812173 40.345203)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Parque Lisboa'                                                                        ,ST_GeomFromText('POINT(-3.821572 40.349406)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alcorcón Central (correspondencia con Cercanías de Renfe )'                           ,ST_GeomFromText('POINT(-3.832604 40.349488)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Parque Oeste'                                                                         ,ST_GeomFromText('POINT(-3.849427 40.345825)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Universidad Rey Juan Carlos'                                                          ,ST_GeomFromText('POINT(-3.872258 40.335128)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Móstoles Central (correspondencia con Cercanías de Renfe )'                           ,ST_GeomFromText('POINT(-3.863632 40.329436)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pradillo'                                                                             ,ST_GeomFromText('POINT(-3.865778 40.322271)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Hospital de Móstoles'                                                                 ,ST_GeomFromText('POINT(-3.874747 40.316446)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Manuela Malasaña'                                                                     ,ST_GeomFromText('POINT(-3.86419  40.309018)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Loranca'                                                                              ,ST_GeomFromText('POINT(-3.837754 40.297203)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Hospital de Fuenlabrada'                                                              ,ST_GeomFromText('POINT(-3.816468 40.285746)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Parque Europa'                                                                        ,ST_GeomFromText('POINT(-3.806469 40.285026)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Fuenlabrada Central (correspondencia con Cercanías de Renfe )'                        ,ST_GeomFromText('POINT(-3.798186 40.282636)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Parque de los Estados'                                                                ,ST_GeomFromText('POINT(-3.787071 40.286794)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Arroyo Culebro'                                                                       ,ST_GeomFromText('POINT(-3.756598 40.288725)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Conservatorio'                                                                        ,ST_GeomFromText('POINT(-3.745762 40.293291)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Alonso de Mendoza'                                                                    ,ST_GeomFromText('POINT(-3.736642 40.300820)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Getafe Central (correspondencia con Cercanías de Renfe )'                             ,ST_GeomFromText('POINT(-3.734282 40.309640)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Juan de la Cierva'                                                                    ,ST_GeomFromText('POINT(-3.722287 40.311800)', 4326));
INSERT INTO STATIONS(name,location) VALUES('El Casar (correspondencia con Cercanías de Renfe )'                                   ,ST_GeomFromText('POINT(-3.710228 40.318410)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Los Espartales'                                                                       ,ST_GeomFromText('POINT(-3.718253 40.324234)', 4326));
INSERT INTO STATIONS(name,location) VALUES('El Bercial'                                                                           ,ST_GeomFromText('POINT(-3.729647 40.329060)', 4326));
INSERT INTO STATIONS(name,location) VALUES('El Carrascal',                                                                        ,ST_GeomFromText('POINT(-3.740247 40.337058)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Julián Besteiro'                                                                      ,ST_GeomFromText('POINT(-3.75265  40.334768)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Casa del Reloj'                                                                       ,ST_GeomFromText('POINT(-3.759495 40.326622)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Hospital Severo Ochoa'                                                                ,ST_GeomFromText('POINT(-3.768035 40.321764)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Leganés Central (correspondencia con Cercanías de Renfe )'                            ,ST_GeomFromText('POINT(-3.771597 40.328945)', 4326));
INSERT INTO STATIONS(name,location) VALUES('San Nicasio.'                                                                         ,ST_GeomFromText('POINT(-3.775931 40.336126)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Línea Ramal Opera - Príncipe Pío'                                                     ,ST_GeomFromText('POINT(-0.000000 0.0000000)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Opera (correspondencia con las líneas 2 y 5)'                                         ,ST_GeomFromText('POINT(-3.709842 40.418397)', 4326));
INSERT INTO STATIONS(name,location) VALUES('Príncipe Pío (corresp.con líneas 6 y 10,autobuses interurbanos y Cercanías de Renfe).',ST_GeomFromText('POINT(-3.720552 40.420488)', 4326));













ML1: Pinar de Chamartí­n - Las Tablas
INSERT INTO STATIONS(name,location) VALUES('Pinar de Chamartín (correspondencia con líneas 1 y 4)'     ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Fuente de la Mora (correspondencia con Cercanías de Renfe)',ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Virgen del Cortijo'                                        ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Antonio Saura'                                             ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Álvarez de Villamil'                                       ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Blasco Ibáñez'                                             ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('María Tudor'                                               ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Palas de Rey'                                              ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Las Tablas (correspondencia con línea 10)'                 ,ST_GeomFromText('POINT()', 4326));


ML2: Colonia Jardín - Estación de Aravaca
INSERT INTO STATIONS(name,location) VALUES('Colonia Jardín (correspondencia con la líneas 10 y con Metro Ligero 3)',ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Prado de la Vega'                                                      ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Colonia de los Ángeles'                                                ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Prado del Rey'                                                         ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Somosaguas Sur'                                                        ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Somosaguas Centro'                                                     ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Pozuelo Oeste'                                                         ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Bélgica'                                                               ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Dos Castillas'                                                         ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Campus de Somosaguas'                                                  ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Avenida de Europa'                                                     ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Berna'                                                                 ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Estación de Aravaca.'                                                  ,ST_GeomFromText('POINT()', 4326));


ML3: Colonia Jardín - Puerta de Boadilla
INSERT INTO STATIONS(name,location) VALUES('Colonia Jardín (correspondencia con la línea 10 y con Metro Ligero 2)',ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ciudad de la Imagen'                                                  ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('José Isbert, Ciudad del Cine'                                         ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cocheras'                                                             ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Retamares'                                                            ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Montepríncipe'                                                        ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ventorro del Cano'                                                    ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Prado del Espino'                                                     ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Cantabria'                                                            ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Ferial de Boadilla'                                                   ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Boadilla Centro'                                                      ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Nuevo Mundo'                                                          ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Siglo XXI'                                                            ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Infante Don Luís'                                                     ,ST_GeomFromText('POINT()', 4326));
INSERT INTO STATIONS(name,location) VALUES('Puerta de Boadilla'                                                   ,ST_GeomFromText('POINT()', 4326));


