import { getRepository, Repository } from 'typeorm';
import IAppointmentsRespository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentsDTO from '@modules/appointments/dtos/ICreateAppointmentsDTO';
import Appointment from '../entities/Appointments';

class AppointmentsRepository implements IAppointmentsRespository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointments = await this.ormRepository.findOne({
      where: { date },
    });
    return findAppointments;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentsDTO): Promise<Appointment> {
    const appointments = await this.ormRepository.create({
      provider_id,
      date,
    });
    await this.ormRepository.save(appointments);
    return appointments;
  }
}

export default AppointmentsRepository;
