import { BsSmartwatch } from 'react-icons/bs'
import {
  FaBed,
  FaBicycle,
  FaBlender,
  FaBriefcase,
  FaBroom,
  FaBuilding,
  FaBus,
  FaCar,
  FaCarAlt,
  FaCarSide,
  FaChargingStation,
  FaChild,
  FaChurch,
  FaConciergeBell,
  FaCouch,
  FaDog,
  FaDoorClosed,
  FaDumbbell,
  FaGamepad,
  FaGraduationCap,
  FaHandshake,
  FaHospital,
  FaHotTub,
  FaKey,
  FaLaptopHouse,
  FaMountain,
  FaPhoneVolume,
  FaRunning,
  FaShoppingBag,
  FaSpa,
  FaSwimmer,
  FaSwimmingPool,
  FaTemperatureHigh,
  FaTools,
  FaTree,
  FaUserTie,
  FaUtensils,
  FaVolleyballBall,
  FaWifi,
} from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import { GiCctvCamera, GiWashingMachine } from 'react-icons/gi'
import { MdElevator, MdOutlineBalcony, MdOutlineKitchen } from 'react-icons/md'
import { TbAirConditioning, TbPackage } from 'react-icons/tb'

export const amenityIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  // Security & Access
  securitySystem: FaShield,
  security247: GiCctvCamera,
  accessControl: FaKey,
  intercom: FaPhoneVolume,

  // Parking
  parking: FaCar,
  coveredParking: FaCarAlt,
  valetService: FaUserTie,
  evCharging: FaChargingStation,
  bicycleStorage: FaBicycle,

  // Wellness & Recreation
  swimmingPool: FaSwimmingPool,
  gym: FaDumbbell,
  spaFacilities: FaSpa,
  saunaAndSteam: FaHotTub,
  childrensPlayArea: FaChild,
  sportsCourts: FaVolleyballBall,
  walkingTrack: FaRunning,
  bbqArea: FaUtensils,
  gamesRoom: FaGamepad,

  // Business & Work
  businessCenter: FaBriefcase,
  coworkingSpace: FaLaptopHouse,
  meetingRooms: FaHandshake,

  // Building Services
  maintenance247: FaTools,
  conciergeService: FaConciergeBell,
  buildingManagement: FaBuilding,
  packageReception: TbPackage,
  housekeepingServices: FaBroom,

  // Core Unit Features
  airConditioning: TbAirConditioning,
  heating: FaTemperatureHigh,
  smartHome: BsSmartwatch,
  fastInternet: FaWifi,
  builtInWardrobes: FaDoorClosed,

  // Kitchen & Laundry
  fittedKitchen: MdOutlineKitchen,
  builtInAppliances: FaBlender,
  laundryRoom: GiWashingMachine,
  washerDryer: GiWashingMachine,

  // Outdoor Features
  balconyTerrace: MdOutlineBalcony,
  privateGarden: FaTree,
  scenicViews: FaMountain,
  petFriendly: FaDog,

  // Premium Features
  privatePool: FaSwimmer,
  privateElevator: MdElevator,
  maidsRoom: FaBed,
  driversRoom: FaCarSide,

  // Nearby Amenities
  retailDiningNearby: FaShoppingBag,
  educationalNearby: FaGraduationCap,
  healthcareNearby: FaHospital,
  publicTransportNearby: FaBus,
  worshipPlacesNearby: FaChurch,
  parksNearby: FaTree,

  // Other
  furnished: FaCouch,
}
