# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
# Mineral.create!(name: '', color: '', luster: '', streak: '', hardness_min: 6, hardness_max: 7, cleavage: '', fracture: '', composition: '',description: "", img_url: '')

# DESTROYS
Comment.destroy_all
Mineral.destroy_all
User.destroy_all



#USERS
@admin = User.create!(username: 'admin', email: 'admin@mineral.com', password: 'password')

#MINERALS
@garnet = Mineral.create!(name: 'garnet', color: 'all', luster: 'vitreous', streak: 'white', hardness_min: 6.5, hardness_max: 8.5, cleavage: 'none', fracture: 'conchoidal to uneven', composition: 'X3Y2(SiO4)3',description: "The mineral garnet is commonly found in metamorphic and to a lesser extent, igneous rocks. Most natural garnets are compositionally zoned and contain inclusions. Its crystal lattice structure is stable at high pressures and temperatures and is thus found in green-schist facies metamorphic rocks including gneiss, hornblende schist, and mica schist. The composition that is stable at the pressure and temperature conditions of Earth's mantle is pyrope, which is often found in peridotites and kimberlites, as well as the serpentines that form from them. Garnets are unique in that they can record the pressures and temperatures of peak metamorphism and are used as geobarometers and geothermometers in the study of geothermobarometry which determines, Pressure-Temperature Paths. Garnets are used as an index mineral in the delineation of isograds in metamorphic rocks.", img_url: 'https://i.imgur.com/x2i2KY1.jpg')

@quartz = Mineral.create!(name: 'quartz', color: 'colorless, varies', luster: 'vitreous', streak: 'white', hardness_min: 7.0, hardness_max: 7.0, cleavage: '{0110} Indistinct', fracture: 'conchoidal', composition: 'SiO2',description: "Quartz is a defining constituent of granite and other felsic igneous rocks. It is very common in sedimentary rocks such as sandstone and shale. It is a common constituent of schist, gneiss, quartzite and other metamorphic rocks. Quartz has the lowest potential for weathering in the Goldich dissolution series and consequently it is very common as a residual mineral in stream sediments and residual soils. Generally a high presence of quartz suggests a mature rock, since it indicates the rock has been heavily reworked and quartz was the primary mineral that endured heavy weathering.

While the majority of quartz crystallizes from molten magma, quartz also chemically precipitates from hot hydrothermal veins as gangue, sometimes with ore minerals like gold, silver and copper. Large crystals of quartz are found in magmatic pegmatites. Well-formed crystals may reach several meters in length and weigh hundreds of kilograms.", img_url: 'https://i.imgur.com/tFKKB2n.jpg')

@labradorite = Mineral.create!(name: 'labradorite', color: 'varies with purple, blue, and green schillers', luster: 'vitreous to pearly', streak: 'white', hardness_min: 6.0, hardness_max: 6.5, cleavage: 'Perfect on {001}, less perfect on {010}, intersecting at near 90°; distinct on {110}', fracture: 'uneven to conchoidal', composition: '(Ca,Na)Al1-2Si3-2O8',description: "The geological type area for labradorite is Paul Island near the town of Nain in Labrador, Canada. It has also been reported in Norway, Finland and various other locations worldwide, with notable distribution in Madagascar, China, Australia, Slovakia and the USA.

Labradorite occurs in mafic igneous rocks and is the feldspar variety most common in basalt and gabbro. The uncommon anorthosite bodies are composed almost entirely of labradorite. It also is found in metamorphic amphibolites and as a detrital component of some sediments. Common mineral associates in igneous rocks include olivine, pyroxenes, amphiboles and magnetite.", img_url: 'https://i.imgur.com/Kn3KuB5.jpg')

@orthoclase = Mineral.create!(name: 'orthoclase', color: 'colorless, greenish, greyish yellow, white, pink', luster: 'Vitreous, pearly on cleavage surfaces', streak: '	white', hardness_min: 6.0, hardness_max: 6.0, cleavage: 'perfect on {001}, good on {010}, and intersect at 90°', fracture: 'conchoidal to uneven', composition: 'KAlSi3O8',description: "Orthoclase is a common constituent of most granites and other felsic igneous rocks and often forms huge crystals and masses in pegmatite. Typically, the pure potassium endmember of orthoclase forms a solid solution with albite, the sodium endmember, of plagioclase. While slowly cooling within the earth, sodium-rich albite lamellae form by exsolution, enriching the remaining orthoclase with potassium. The resulting intergrowth of the two feldspars is called perthite.", img_url: 'https://i.imgur.com/YWpP76e.jpg')

@chalcanthite = Mineral.create!(name: 'chalcanthite', color: 'blue, greenish blue', luster: 'vitreous', streak: 'white', hardness_min: 2.5, hardness_max: 2.5, cleavage: 'Perfect on {110}, interrupted on {110}', fracture: 'conchoidal', composition: 'CuSO4·5H2O',description: "Chalcanthite, whose name derives from the Greek, chalkos and anthos, meaning copper flower, is a richly colored blue/green water-soluble sulfate mineral. It is commonly found in the late-stage oxidation zones of copper deposits. Due to its ready solubility, chalcanthite is more common in arid regions.

Chalcanthite is a pentahydrate and the most common member of a group of similar hydrated sulfates, the chalcanthite group. These other sulfates are identical in chemical composition to chalcanthite, with the exception of replacement of the copper ion by either manganese as jokokuite, iron as siderotil, or magnesium as pentahydrite.", img_url: 'https://i.imgur.com/o4u2j0B.jpg')

@biotite = Mineral.create!(name: 'biotite', color: 'dark brown, greenish-brown, blackish-brown, yellow, white', luster: 'vitreous to pearly', streak: 'white', hardness_min: 2.5, hardness_max: 3.0, cleavage: 'perfect on {001}', fracture: 'micaceous', composition: 'K(Mg,Fe)3(AlSi3O10)(F,OH)2',description: "Members of the biotite group are found in a wide variety of igneous and metamorphic rocks. For instance, biotite occurs in the lava of Mount Vesuvius and in the Monzoni intrusive complex of the western Dolomites. Biotite in granite tends to be poorer in magnesium than the biotite found in its volcanic equivalent, rhyolite. Biotite is an essential phenocryst in some varieties of lamprophyre. Biotite is occasionally found in large cleavable crystals, especially in pegmatite veins, as in New England, Virginia and North Carolina USA. Other notable occurrences include Bancroft and Sudbury, Ontario Canada. It is an essential constituent of many metamorphic schists, and it forms in suitable compositions over a wide range of pressure and temperature. It has been estimated that biotite comprises up to 7% of the exposed continental crust.", img_url: 'https://i.imgur.com/MwQJNuB.jpg')

# @flourite

# @opal

# @azurite

# @tourmaline

puts "#{User.count} users created"
puts "#{Mineral.count} minerals created"